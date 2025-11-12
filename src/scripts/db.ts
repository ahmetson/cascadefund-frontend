import { MongoClient, Db, Collection } from 'mongodb'

interface WishlistModel {
    _id?: any
    email: string
    time: number
}

let client: MongoClient | null = null
let db: Db | null = null

async function getClient(): Promise<MongoClient> {
    if (!client) {
        const uri = import.meta.env.MONGODB_URI
        if (!uri) {
            throw new Error('MONGODB_URI environment variable is not set')
        }
        client = new MongoClient(uri)
        await client.connect()
    }
    return client
}

async function getDb(): Promise<Db> {
    if (!db) {
        const mongoClient = await getClient()
        db = mongoClient.db('CascadeFund')
    }
    return db
}

async function getWishlistCollection(): Promise<Collection<WishlistModel>> {
    const database = await getDb()
    return database.collection<WishlistModel>('wishlist')
}

export async function isWishlisted(email: string): Promise<boolean> {
    try {
        const collection = await getWishlistCollection()
        const result = await collection.findOne({ email })
        return result !== null
    } catch (error) {
        console.error('Error checking if email is wishlisted:', error)
        return false
    }
}

export async function joinWishlist(email: string): Promise<boolean> {
    try {
        const collection = await getWishlistCollection()
        const wishlistEntry: WishlistModel = {
            email,
            time: Date.now()
        }
        await collection.insertOne(wishlistEntry)
        return true
    } catch (error) {
        console.error('Error joining wishlist:', error)
        return false
    }
}

