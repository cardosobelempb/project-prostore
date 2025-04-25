// -exception.filter.ts
import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { errorHandlers } from './error-handlers';
import { StandardError } from './standard-error.interface';

@Catch()
export class ErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const handler = errorHandlers[exception.name];

    let error: StandardError;

    if (handler) {
      error = handler(exception, request);
    } else {
      error = {
        timestamp: new Date().toISOString(),
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Internal server error',
        message: exception.message || 'Unexpected error',
        path: request.url,
      };
    }

    response.status(error.status).json(error);
  }
}
