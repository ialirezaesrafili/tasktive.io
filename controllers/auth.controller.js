import autoBind from "auto-bind";
import authService from "../services/auth.service.js";


class AuthController {
    #authService;

    constructor() {
        autoBind(this);
        this.#authService = authService
    }

    async register(req, res, next) {
        try {
            const {email, password, role} = req.body;
            // handler validation
            if (!email || !password) {
                // Bad request
                return res.status(400).json({
                    message: 'Email and password is required'
                })
            }
            const data = {
                password,
                role
            }
            const user = await this.#authService.register({email, data});
            if (user) {
                return res.status(201).json({
                    message: 'User registered',
                    data: {
                        email: user.email,
                        role: user.role
                    }
                })
            }
        } catch (err) {
            console.error(`[AuthController] Error: ${err.message}`);
            throw err;
        }
    }
}


// create singleton instance
const authController = new AuthController();

export default authController;