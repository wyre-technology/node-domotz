import type { HttpClient } from '../http.js';
import type { DomotzPowerOutlet } from '../types/index.js';

export class PowerResource {
  constructor(private http: HttpClient) {}

  async listOutlets(agentId: number, deviceId: number): Promise<DomotzPowerOutlet[]> {
    return this.http.request<DomotzPowerOutlet[]>(`/agent/${agentId}/device/${deviceId}/power-outlet`);
  }

  async controlOutlet(agentId: number, deviceId: number, outletId: number, action: 'on' | 'off' | 'cycle'): Promise<void> {
    await this.http.request(`/agent/${agentId}/device/${deviceId}/power-outlet/${outletId}/action/${action}`, { method: 'POST' });
  }
}
