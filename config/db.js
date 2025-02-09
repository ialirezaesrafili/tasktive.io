import mongoose from 'mongoose'


async function dbConnection(mongo) {
    try {

        const connection = await mongoose.connect(mongo);
        console.log("[MONGODB] Connected to MongoDB successfully.");
        return connection;
    } catch (err) {
        console.log("[MONGODB] Error connecting to MongoDB");
        console.log(`[ERROR] MongoDB connection failed: ${err.message}`);
        throw err;
    }
}


export default dbConnection;

