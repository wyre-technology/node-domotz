import type { HttpClient } from '../http.js';
import type { DomotzNetworkTopology } from '../types/index.js';

export class NetworkResource {
  constructor(private http: HttpClient) {}

  async getTopology(agentId: number): Promise<DomotzNetworkTopology> {
    return this.http.request<DomotzNetworkTopology>(`/agent/${agentId}/network-topology`);
  }

  async getInterfaces(agentId: number): Promise<unknown[]> {
    return this.http.request<unknown[]>(`/agent/${agentId}/network/interfaces`);
  }

  async getIpConflicts(agentId: number): Promise<unknown[]> {
    return this.http.request<unknown[]>(`/agent/${agentId}/ip-conflict`);
  }
}
