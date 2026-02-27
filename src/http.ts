import { AuthenticationError, DomotzError, NotFoundError, RateLimitError, ServerError } from './errors.js';

export interface RequestOptions {
  method?: string;
  params?: Record<string, string | number | undefined>;
  body?: unknown;
}

export class HttpClient {
  private baseUrl: string;
  private apiKey: string;

  constructor(apiKey: string, region: string = 'us-east-1') {
    this.apiKey = apiKey;
    this.baseUrl = `https://api-${region}-cell-1.domotz.com/public-api/v1`;
  }

  async request<T>(path: string, options: RequestOptions = {}): Promise<T> {
    const url = new URL(`${this.baseUrl}${path}`);
    if (options.params) {
      for (const [key, value] of Object.entries(options.params)) {
        if (value !== undefined) url.searchParams.set(key, String(value));
      }
    }

    const res = await fetch(url.toString(), {
      method: options.method || 'GET',
      headers: {
        'X-Api-Key': this.apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    const rawText = await res.text();
    let body: unknown;
    try { body = JSON.parse(rawText); } catch { body = rawText; }

    if (res.ok) return body as T;

    switch (res.status) {
      case 401: throw new AuthenticationError(body);
      case 404: throw new NotFoundError(path, body);
      case 429: throw new RateLimitError(body);
      case 500:
      case 502:
      case 503: throw new ServerError(`Server error`, res.status, body);
      default: throw new DomotzError(`HTTP ${res.status}`, res.status, body);
    }
  }
}
