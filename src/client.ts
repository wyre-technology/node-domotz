import { HttpClient } from './http.js';
import { AgentsResource } from './resources/agents.js';
import { DevicesResource } from './resources/devices.js';
import { MetricsResource } from './resources/metrics.js';
import { NetworkResource } from './resources/network.js';
import { AlertsResource } from './resources/alerts.js';
import { PowerResource } from './resources/power.js';

export interface DomotzClientConfig {
  apiKey: string;
  region?: 'us-east-1' | 'eu-central-1';
}

export class DomotzClient {
  readonly agents: AgentsResource;
  readonly devices: DevicesResource;
  readonly metrics: MetricsResource;
  readonly network: NetworkResource;
  readonly alerts: AlertsResource;
  readonly power: PowerResource;

  constructor(config: DomotzClientConfig) {
    const http = new HttpClient(config.apiKey, config.region ?? 'us-east-1');
    this.agents = new AgentsResource(http);
    this.devices = new DevicesResource(http);
    this.metrics = new MetricsResource(http);
    this.network = new NetworkResource(http);
    this.alerts = new AlertsResource(http);
    this.power = new PowerResource(http);
  }
}
