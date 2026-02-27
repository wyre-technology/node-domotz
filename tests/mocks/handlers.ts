import { http, HttpResponse } from 'msw';

const BASE_URL = 'https://api-us-east-1-cell-1.domotz.com/public-api/v1';

export const handlers = [
  http.get(`${BASE_URL}/agent`, () =>
    HttpResponse.json([
      { id: 1, display_name: 'Office', public_address: '1.2.3.4', status: 'online', created_at: '2024-01-01T00:00:00Z' },
    ])
  ),
  http.get(`${BASE_URL}/agent/1/device`, () =>
    HttpResponse.json([
      { id: 10, display_name: 'Router', ip_addresses: ['192.168.1.1'], mac_address: 'AA:BB:CC:DD:EE:FF', status: 'online', type: 'router' },
    ])
  ),
  http.get(`${BASE_URL}/user`, ({ request }) => {
    const apiKey = request.headers.get('X-Api-Key');
    if (apiKey !== 'valid-key') return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });
    return HttpResponse.json({ id: 1, email: 'user@example.com' });
  }),
];
