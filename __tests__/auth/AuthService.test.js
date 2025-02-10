import AuthUnit from "../../test/unit/auth.unit.js";
import AuthService from "../../services/auth.service.js";


describe('AuthService - Register Method', () => {
    let authService;
    let authUnit;

    beforeEach(() => {
        // Initialize AuthUnit and AuthService
        authUnit = new AuthUnit();
        authService = new AuthService();
    });

    test('should successfully register a new user', async () => {
        const userData = {
            email: 'test@example.com',
            data: { password: 'password123', role: 'user' },
        };

        const createdUser = await authService.register(userData);

        // Check if UserModel.create was called with the correct arguments
        expect(UserModel.create).toHaveBeenCalledWith(expect.objectContaining({
            email: userData.email,
            password: 'hashedPassword', // Password should be hashed
            role: userData.data.role,
        }));

        // Check that the returned user is the mockUser
        expect(createdUser).toEqual(authUnit.mockUser);
    });

    test('should throw error if email is already taken', async () => {
        // Simulate an existing user with the same email
        authUnit.mockExistingUser();

        const userData = {
            email: 'test@example.com',
            data: { password: 'password123', role: 'user' },
        };

        await expect(authService.register(userData)).rejects.toThrow('Email already exists.');
    });

    test('should throw error if user creation fails', async () => {
        // Mock a failure in the UserModel.create method
        authUnit.mockCreateFail();

        const userData = {
            email: 'test@example.com',
            data: { password: 'password123', role: 'user' },
        };

        await expect(authService.register(userData)).rejects.toThrow('User creation failed');
    });

    test('should hash the password correctly', async () => {
        const hashedPassword = await authService.hashPassword('password123');
        expect(hashedPassword).toBe('hashedPassword');
        expect(bcrypt.hash).toHaveBeenCalledWith('password123', expect.any(Number));
    });

    test('should throw error if password hashing fails', async () => {
        authUnit.mockPasswordHashFail();

        await expect(authService.hashPassword('password123')).rejects.toThrow('Hashing failed');
    });
});
