import {CustomError} from './CustomError';

export default class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors(): {message: string; field?: string | undefined}[] {
    return [{message: this.message}];
  }
}
