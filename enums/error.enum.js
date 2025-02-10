const HttpStatus = Object.freeze({
    // 1xx Informational
    CONTINUE: {code: 100, message: "Continue: The server has received the request headers."},
    SWITCHING_PROTOCOLS: {
        code: 101, message: "Switching Protocols: The requester has asked the server to switch protocols."
    },
    PROCESSING: {
        code: 102, message: "Processing: The server is processing the request but no response is available yet."
    },

    // 2xx Success
    OK: {code: 200, message: "OK: The request was successful."},
    CREATED: {code: 201, message: "Created: The request was successful and a resource was created."},
    ACCEPTED: {code: 202, message: "Accepted: The request has been accepted for processing."},
    NO_CONTENT: {code: 204, message: "No Content: The request was successful but has no response body."},

    // 3xx Redirection
    MOVED_PERMANENTLY: {code: 301, message: "Moved Permanently: The resource has been moved permanently."},
    FOUND: {code: 302, message: "Found: The resource is temporarily located at a different URL."},
    NOT_MODIFIED: {code: 304, message: "Not Modified: The cached version is still valid."},

    // 4xx Client Error
    BAD_REQUEST: {
        code: 400, message: "Bad Request: The server could not understand the request due to invalid syntax."
    },
    UNAUTHORIZED: {code: 401, message: "Unauthorized: Authentication is required and has failed or not been provided."},
    FORBIDDEN: {code: 403, message: "Forbidden: The server understands the request but refuses to authorize it."},
    NOT_FOUND: {code: 404, message: "Not Found: The requested resource could not be found."},
    METHOD_NOT_ALLOWED: {code: 405, message: "Method Not Allowed: The HTTP method is not supported by the resource."},
    CONFLICT: {code: 409, message: "Conflict: The request conflicts with the current state of the resource."},

    // 5xx Server Error
    INTERNAL_SERVER_ERROR: {
        code: 500, message: "Internal Server Error: The server encountered an unexpected condition."
    },
    NOT_IMPLEMENTED: {code: 501, message: "Not Implemented: The server does not support the functionality required."},
    BAD_GATEWAY: {code: 502, message: "Bad Gateway: The server received an invalid response from an upstream server."},
    SERVICE_UNAVAILABLE: {
        code: 503, message: "Service Unavailable: The server is temporarily unable to handle the request."
    },
    GATEWAY_TIMEOUT: {
        code: 504, message: "Gateway Timeout: The server did not receive a timely response from an upstream server."
    },
});


export default HttpStatus;