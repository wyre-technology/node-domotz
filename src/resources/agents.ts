import type { HttpClient } from '../http.js';
import type { DomotzAgent } from '../types/index.js';

export class AgentsResource {
  constructor(private http: HttpClient) {}

  async list(): Promise<DomotzAgent[]> {
    return this.http.request<DomotzAgent[]>('/agent');
  }

  async get(agentId: number): Promise<DomotzAgent> {
    return this.http.request<DomotzAgent>(`/agent/${agentId}`);
  }
}
