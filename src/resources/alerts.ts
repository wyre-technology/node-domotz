import type { HttpClient } from '../http.js';
import type { DomotzAlertProfile } from '../types/index.js';

export class AlertsResource {
  constructor(private http: HttpClient) {}

  async listProfiles(): Promise<DomotzAlertProfile[]> {
    return this.http.request<DomotzAlertProfile[]>('/alert-profile');
  }
}
