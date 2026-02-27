import type { HttpClient } from '../http.js';
import type { DomotzDevice, DomotzDeviceUptime } from '../types/index.js';

export class DevicesResource {
  constructor(private http: HttpClient) {}

  async list(agentId: number): Promise<DomotzDevice[]> {
    return this.http.request<DomotzDevice[]>(`/agent/${agentId}/device`);
  }

  async get(agentId: number, deviceId: number): Promise<DomotzDevice> {
    return this.http.request<DomotzDevice>(`/agent/${agentId}/device/${deviceId}`);
  }

  async getUptime(agentId: number, deviceId: number): Promise<DomotzDeviceUptime> {
    return this.http.request<DomotzDeviceUptime>(`/agent/${agentId}/device/${deviceId}/uptime`);
  }

  async getHistory(agentId: number, deviceId: number): Promise<unknown[]> {
    return this.http.request<unknown[]>(`/agent/${agentId}/device/${deviceId}/history/rtd`);
  }
}
