import dotenv from "dotenv";
// config ENV

dotenv.config();


// create instance for environment
const envInstance = Object.freeze({
    port: process.env.PORT || 3000,
    mongoDev: process.env.MONGODBDEV,
    mongoProduction: process.env.MONGOPRODUCTION,
    mongoBackUp: process.env.MONOGOBACKUP,
    salt: parseInt(process.env.SALT) || 10,
    jwtSecret: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
})


export default envInstance;