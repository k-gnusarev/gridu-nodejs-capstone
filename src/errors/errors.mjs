export class HttpException {
  constructor(errorMessage) {
    this.errorMessage = errorMessage
  }
}

export class NotFoundException extends HttpException {
  constructor(errorMessage) {
    super(errorMessage);

    this.errorCode = 404
  }
}

export class ForbiddenException extends HttpException {
  constructor(errorMessage) {
    super(errorMessage);

    this.errorCode = 403
  }
}

export class BadRequestException extends HttpException {
  constructor(errorMessage) {
    super(errorMessage);

    this.errorCode = 400
  }
}


