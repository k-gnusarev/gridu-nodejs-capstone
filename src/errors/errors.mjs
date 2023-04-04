export class HttpException {
  constructor(message) {
    this.message = message
  }
}

export class NotFoundException extends HttpException {
  constructor(message) {
    super(message)

    this.code = 404
  }
}

export class BadRequestException extends HttpException {
  constructor(message) {
    super(message)

    this.code = 400
  }
}


