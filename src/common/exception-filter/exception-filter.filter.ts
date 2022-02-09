import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Request, Response } from "express";
/**
 * ExceptionExceptionFilter
 * @author Md Nasir Hussain
 */
@Catch()
export class ExceptionExceptionFilter implements ExceptionFilter {
    /**
     * ExceptionExceptionFilter class
     * @param exception path
     * @param host path
     * @returns if success or failure
     */
    catch(exception: any, host: ArgumentsHost) {
        /**
         * switchToHttp and store data
         */
        let ctx = host.switchToHttp();
        /**
         * getRequest and store
         */
        let request = ctx.getRequest<Request>();
        /**
         * getResponse and store
         */
        let response = ctx.getResponse<Response>();
        /**
         * getStatus and store
         */
        let status = exception.getStatus();
        /**
         * return here response,statusCode,message,url,time
         */
        return response.status(status).json({
            statusCode: status,
            message: exception.message,
            url: request.url,
            time: new Date().toISOString()
        });


    }
}