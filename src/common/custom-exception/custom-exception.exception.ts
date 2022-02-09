import { HttpException, HttpStatus } from "@nestjs/common";

/**
 * custom exception class
 * @author hotel managements
 */
 export class CustomException extends HttpException {
    /**
     * constructor creation
     * @param message  path
     */
    constructor(message) {
        super(message, HttpStatus.NOT_FOUND);
    }
}