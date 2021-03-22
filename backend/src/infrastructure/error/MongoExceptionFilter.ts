import { ArgumentsHost, BadRequestException, Catch, ConflictException, ExceptionFilter, HttpException } from '@nestjs/common';
import { MongoError } from 'mongodb';
import { HttpError } from './HttpError';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
    catch(exception: MongoError, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse();
        if (exception.code === 11000) {
          response.status(400).json({ message: 'User already exists.' });
        } else {
          response.status(400).json({ message: 'Internal error.' });
        }
      }
}