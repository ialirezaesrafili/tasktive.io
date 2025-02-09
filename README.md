# Tasktive.io

## Project Structure


## Description of Directories and Files

### **config/**
- Contains configuration files for the application.
    - `db.js`: Database connection setup.
    - `env.js`: Environment variable configuration.

### **controllers/**
- Handles the business logic for different parts of the application.
    - `authController.js`: Logic for authentication (e.g., login, signup).
    - `taskController.js`: Logic for task management (e.g., create, update, delete tasks).
    - `logController.js`: Logic for logging (if applicable).

### **middleware/**
- Custom middleware functions for request processing.
    - `auth.middleware.js`: Ensures users are authenticated.
    - `role.middleware.js`: Role-based access control.
    - `error.middleware.js`: Centralized error handling.

### **models/**
- Database models (e.g., Mongoose schemas).
    - `user.model.js`: User schema and model.
    - `task.model.js`: Task schema and model.
    - `log.model.js`: Log schema and model.

### **routes/**
- Defines API routes for the application.
    - `auth.route.js`: Routes for authentication (e.g., `/auth/login`, `/auth/signup`).
    - `task.route.js`: Routes for task management (e.g., `/tasks/create`, `/tasks/update`).
    - `log.route.js`: Routes for logging (if applicable).

### **services/**
- Contains business logic and external service integrations.
    - `auth.service.js`: Handles authentication-related logic.
    - `task.service.js`: Handles task-related logic.
    - `log.service.js`: Handles logging logic (if needed).


### **utils/**
- Utility functions and helpers.
    - `logger.js`: Custom logger (e.g., Winston or Bunyan).
    - `validators.js`: Validation functions for input data.
    - `constants.js`: Constants used across the application (e.g., role names, status codes).

### **tests/**
- Contains unit and integration tests.
    - `unit/`: Unit tests for individual components.
        - `auth.test.js`: Unit tests for authentication.
        - `task.test.js`: Unit tests for tasks.
    - `integration/`: Integration tests for combined components.
        - `auth.test.js`: Integration tests for authentication.
        - `task.test.js`: Integration tests for tasks.

### **logs/**
- Log files (if using file-based logging).
    - `error.log`: Error logs.
    - `combined.log`: Combined logs (all logs).

### **Root Files**
- `.env`: Environment variables.
- `.gitignore`: Specifies files and folders to ignore in Git.
- `package.json`: Lists project dependencies and scripts.
- `README.md`: Project documentation.
- `server.js`: Entry point for the application.

---
