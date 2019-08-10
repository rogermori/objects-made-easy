class GenericException extends Error {
  constructor(message) {
    super(message);
    this.name = 'GenericException';
    this.message = message;
  }
  toJSON() {
    return {
      error: {
        name: this.name,
        message: this.message,
        stacktrace: this.stack,
      },
    };
  }
}

class ValidationException extends GenericException {
  constructor(message) {
    super(message);
    this.name = 'ValidationException';
    this.message = message;
  }
}

class MissingParametersException extends GenericException {
  constructor(message) {
    super(message);
    this.name = 'MissingParametersException';
    this.message = message;
  }
}

class InvalidParametersException extends GenericException {
  constructor(message) {
    super(message);
    this.name = 'InvalidParametersException';
    this.message = message;
  }
}

class InvalidStateException extends GenericException {
  constructor(message) {
    super(message);
    this.name = 'InvalidStateException';
    this.message = message;
  }
}

class NoDataFoundException extends GenericException {
  constructor(message) {
    super(message);
    this.name = 'NoDataFoundException';
    this.message = message;
  }
}

class PermissionException extends GenericException {
  constructor(message) {
    super(message);
    this.name = 'PermissionException';
    this.message = message;
  }
}
class DatabaseException extends GenericException {
  constructor(message) {
    super(message);
    this.name = 'DatabaseException';
    this.message = message;
  }
}

module.exports = {
  GenericException,
  NoDataFoundException,
  DatabaseException,
  MissingParametersException,
  InvalidParametersException,
  InvalidStateException,
  PermissionException,
  ValidationException,
};

