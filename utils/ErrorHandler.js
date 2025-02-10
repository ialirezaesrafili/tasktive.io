import HttpStatus from "../enums/error.enum.js";

function statusDetect(statusCode) {
    const statusValidator = Object.values(HttpStatus).find((s) => s.code === statusCode);

    if (statusValidator) {
        return {
            status: statusValidator.code,
            message: statusValidator.message,
        };
    } else {
        return {
            status: statusCode,
            message: "Unknown Error: The provided status code is not recognized.",
        };
    }
}

