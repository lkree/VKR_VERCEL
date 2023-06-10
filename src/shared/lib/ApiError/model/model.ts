export class ApiError extends Error {
  status;
  errors;

  constructor(status: number, message: string, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ApiError(401, 'Пользователь не авторизован');
  }

  static NoAdminRightsError() {
    return new ApiError(401, 'Недостаточно прав для данного действия');
  }

  static BadRequest(message: string, errors = []) {
    return new ApiError(400, message, errors);
  }

  static ServerError(message: string, errors = []) {
    return new ApiError(500, message, errors);
  }
}
