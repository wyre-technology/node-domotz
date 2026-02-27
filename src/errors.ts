export class DomotzError extends Error {
  constructor(message: string, public statusCode: number, public response: unknown) {
    super(message);
    this.name = 'DomotzError';
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
export class AuthenticationError extends DomotzError {
  constructor(response: unknown) {
    super('Invalid API key', 401, response);
    this.name = 'AuthenticationError';
  }
}
export class NotFoundError extends DomotzError {
  constructor(resource: string, response: unknown) {
    super(`${resource} not found`, 404, response);
    this.name = 'NotFoundError';
  }
}
export class RateLimitError extends DomotzError {
  constructor(response: unknown) {
    super('Rate limit exceeded', 429, response);
    this.name = 'RateLimitError';
  }
}
export class ServerError extends DomotzError {}
