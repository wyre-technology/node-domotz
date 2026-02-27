import type { HttpClient } from '../http.js';
import type { DomotzVariable, DomotzVariableHistory, DomotzSnmpSensor } from '../types/index.js';

export class MetricsResource {
  constructor(private http: HttpClient) {}

  async listVariables(agentId: number, deviceId: number): Promise<DomotzVariable[]> {
    return this.http.request<DomotzVariable[]>(`/agent/${agentId}/device/${deviceId}/variable`);
  }

  async getVariableHistory(agentId: number, deviceId: number, variableId: number): Promise<DomotzVariableHistory[]> {
    return this.http.request<DomotzVariableHistory[]>(`/agent/${agentId}/device/${deviceId}/variable/${variableId}/history`);
  }

  async listSnmpSensors(agentId: number, deviceId: number): Promise<DomotzSnmpSensor[]> {
    return this.http.request<DomotzSnmpSensor[]>(`/agent/${agentId}/device/${deviceId}/eye/snmp`);
  }

  async getSensorHistory(agentId: number, deviceId: number, sensorId: number): Promise<unknown[]> {
    return this.http.request<unknown[]>(`/agent/${agentId}/device/${deviceId}/eye/snmp/${sensorId}/history`);
  }
}
