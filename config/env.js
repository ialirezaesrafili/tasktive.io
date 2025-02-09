import dotenv from "dotenv";
// config ENV

dotenv.config();

// create instance for environment

const envInstance = Object.freeze({
    port: process.env.PORT || 3000,
    mongo: process.env.MONGODB || 'mongodb://localhost:27017',
    salt: parseInt(process.env.SALT) || 10,
    jwtSecret: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV || 'development',
})


export default envInstance;