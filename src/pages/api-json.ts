import type { APIRoute } from 'astro'
import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise'
const recaptchaKey = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY;

const projectID = "ara-foundation-453112"
const client = new RecaptchaEnterpriseServiceClient({
    apiKey: import.meta.env.GOOGLE_API_KEY,
});
console.log(`Loading recaptcha by API key: ${import.meta.env.GOOGLE_API_KEY}`);
const projectPath = client.projectPath(projectID);

interface JSONRPCRequest {
    jsonrpc: string
    method: string
    params: {
        email: string
        recaptchaToken: string
        action: 'hero' | 'join-us'
        [key: string]: any
    }
    id: number | string | null
}

interface JSONRPCResponse {
    jsonrpc: string
    result?: any
    error?: {
        code: number
        message: string
        data?: any
    }
    id: number | string | null
}

function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

async function handleJoinWishlist(params: { email?: string, recaptchaToken?: string, action: 'hero' | 'join-us' }): Promise<{ success: boolean; message: string }> {
    if (!params.email) {
        throw {
            code: -32602,
            message: 'Invalid params',
            data: 'Email parameter is required'
        }
    }

    if (!validateEmail(params.email)) {
        throw {
            code: -32602,
            message: 'Invalid params',
            data: 'Invalid email format'
        }
    }

    if (!params.recaptchaToken) {
        throw {
            code: -32602,
            message: 'Invalid params',
            data: 'Recaptcha token is required'
        }
    }

    if (!params.action) {
        throw {
            code: -32602,
            message: 'Invalid params',
            data: 'Recaptcha action is required'
        }
    }

    const request = ({
        assessment: {
            event: {
                token: params.recaptchaToken,
                siteKey: recaptchaKey,
            },
        },
        parent: projectPath,
    });

    const [response] = await client.createAssessment(request);

    // Check if the token is valid.
    if (!response?.tokenProperties?.valid) {
        console.log(`The CreateAssessment call failed because the token was: ${response?.tokenProperties?.invalidReason}`);
        throw {
            code: -32602,
            message: 'Invalid params',
            data: 'Recaptcha verification failed'
        }
    }

    if (response.tokenProperties.action !== params.action) {
        throw {
            code: -32602,
            message: 'Invalid params',
            data: 'Recaptcha action does not match'
        }
    }

    // For more information on interpreting the assessment, see:
    // https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment
    console.log(`The reCAPTCHA score is: ${response?.riskAnalysis?.score}`);
    response?.riskAnalysis?.reasons?.forEach((reason) => {
        console.log(reason);
    });

    const score = response?.riskAnalysis?.score;
    if (!score || score < 0.9) {
        throw {
            code: -32602,
            message: 'Invalid params',
            data: `Recaptcha score ${score} below threshold`
        }
    }

    console.log(`Recaptcha verification was successful, join to wishlist`)

    await new Promise(resolve => setTimeout(resolve, 1000));

    // TODO: Store email in database
    // For now, just return success
    return {
        success: true,
        message: 'Successfully joined wishlist'
    }
}

export const POST: APIRoute = async ({ request }) => {
    console.log('api-json POST request')
    try {
        // Parse JSON-RPC request
        const body: JSONRPCRequest = await request.json()

        // Validate JSON-RPC structure
        if (body.jsonrpc !== '2.0') {
            return new Response(
                JSON.stringify({
                    jsonrpc: '2.0',
                    error: {
                        code: -32600,
                        message: 'Invalid Request',
                        data: 'jsonrpc must be "2.0"'
                    },
                    id: body.id ?? null
                } as JSONRPCResponse),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
        }

        if (!body.method) {
            return new Response(
                JSON.stringify({
                    jsonrpc: '2.0',
                    error: {
                        code: -32600,
                        message: 'Invalid Request',
                        data: 'method is required'
                    },
                    id: body.id ?? null
                } as JSONRPCResponse),
                {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
        }

        // Handle different methods
        let result: any

        switch (body.method) {
            case 'joinwishlist':
                try {
                    result = await handleJoinWishlist(body.params)
                } catch (error: any) {
                    return new Response(
                        JSON.stringify({
                            jsonrpc: '2.0',
                            error: {
                                code: error.code || -32603,
                                message: error.message || 'Internal error',
                                data: error.data
                            },
                            id: body.id ?? null
                        } as JSONRPCResponse),
                        {
                            status: 200, // JSON-RPC errors still return 200
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                    )
                }
                break

            default:
                return new Response(
                    JSON.stringify({
                        jsonrpc: '2.0',
                        error: {
                            code: -32601,
                            message: 'Method not found',
                            data: `Method "${body.method}" is not supported`
                        },
                        id: body.id ?? null
                    } as JSONRPCResponse),
                    {
                        status: 200,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
        }

        // Return success response
        return new Response(
            JSON.stringify({
                jsonrpc: '2.0',
                result,
                id: body.id ?? null
            } as JSONRPCResponse),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    } catch (error: any) {
        // Handle parsing errors or other unexpected errors
        return new Response(
            JSON.stringify({
                jsonrpc: '2.0',
                error: {
                    code: -32700,
                    message: 'Parse error',
                    data: error.message || 'Invalid JSON'
                },
                id: null
            } as JSONRPCResponse),
            {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }
}

