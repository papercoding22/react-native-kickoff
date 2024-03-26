import CustomError from './CustomError';

export default (error: Error) => {
  if (error instanceof CustomError) {
    return error.serializeErrors();
  }
  return [{message: 'Something went wrong'}];
};
