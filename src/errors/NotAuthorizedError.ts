import CustomError from './CustomError';

export default class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super('Not authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors(): {message: string; field?: string | undefined}[] {
    return [
      {
        message: 'Not authorized',
      },
    ];
  }
}
