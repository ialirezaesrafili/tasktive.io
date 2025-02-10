import autoBind from "auto-bind";
import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import envInstance from "../config/env.js";

class AuthService {
    #userModel;

    constructor() {
        // Auto-bind methods to the instance for automatic binding of `this`
        autoBind(this);
        this.#userModel = UserModel; // Assign the UserModel to be used throughout
    }

    // Registration logic
    async register({ email, data }) {
        try {
            const checkMail = await this.#userModel.findOne({ email }).exec();
            if (checkMail) {
                console.log(`Email already exists: ${checkMail.email}`);
                throw new Error("Email already exists.");
            }

            const { password, role } = data;
            const hashedPassword = await this.hashPassword(password); // Use async hashing

            const user = await this.#userModel.create({
                email,
                password: hashedPassword,
                role,
                isLoggedIn: true,
            });

            await user.save();
            return user; // Return user data after successful registration
        } catch (err) {
            console.error(`[AuthService] Error: ${err.message}`);
            throw new Error(err.message); // Ensure meaningful errors are thrown
        }
    }

    // Hash password (async version for scalability)
    async hashPassword(password) {
        try {
            const salt = envInstance.salt || 10; // Default to 10 if salt is undefined
            return bcrypt.hash(password, salt); // Async hash
        } catch (err) {
            console.error(`[AuthService] hashed error : ${err.message}`);
            throw new Error('Password hashing failed.');
        }
    }
}

const authService = new AuthService();
export default authService;
