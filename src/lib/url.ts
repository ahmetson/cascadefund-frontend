/**
 * Converts a GitHub HTTPS URL to git format (URL encoded)
 * @param url - GitHub HTTPS URL (e.g., "https://github.com/org/project")
 * @returns git format URL (e.g., "git/org%2Fproject")
 */
export function githubUrlToGit(url: string): string {
    // Remove trailing slash and extract path after github.com/
    const cleanUrl = url.replace(/\/$/, '')
    const match = cleanUrl.match(/https:\/\/github\.com\/(.+)/)

    if (!match) {
        throw new Error('Invalid GitHub URL format')
    }

    // URL encode the path for HTTP GET requests
    const encodedPath = encodeURIComponent(match[1])
    return `git/${encodedPath}`
}

/**
 * Converts a git format URL to GitHub HTTPS URL (URL decoded)
 * @param git - git format URL (e.g., "git/org%2Fproject")
 * @returns GitHub HTTPS URL (e.g., "https://github.com/org/project")
 */
export function gitToGithubUrl(git: string): string {
    // Remove git/ prefix and construct GitHub URL
    if (!git.startsWith('git/')) {
        throw new Error('Invalid git format - must start with "git/"')
    }

    const encodedPath = git.substring(4) // Remove "git/" prefix
    // URL decode the path to restore original slashes
    const decodedPath = decodeURIComponent(encodedPath)
    return `https://github.com/${decodedPath}`
}
