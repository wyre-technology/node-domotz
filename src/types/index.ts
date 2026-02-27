export interface DomotzAgent {
  id: number;
  display_name: string;
  public_address: string;
  status: 'online' | 'offline' | 'unknown';
  created_at: string;
  last_seen?: string;
}

export interface DomotzDevice {
  id: number;
  display_name: string;
  ip_addresses: string[];
  mac_address: string;
  status: 'online' | 'offline' | 'unknown';
  vendor?: string;
  model?: string;
  type?: string;
  os?: string;
}

export interface DomotzDeviceUptime {
  uptime_seconds: number;
  last_change: string;
}

export interface DomotzVariable {
  id: number;
  label: string;
  value: unknown;
  unit?: string;
  last_updated: string;
}

export interface DomotzVariableHistory {
  timestamp: string;
  value: unknown;
}

export interface DomotzSnmpSensor {
  id: number;
  label: string;
  oid: string;
  type: string;
  last_value?: unknown;
  last_updated?: string;
}

export interface DomotzNetworkTopology {
  nodes: Array<{ id: string; label: string; type: string; ip?: string }>;
  edges: Array<{ from: string; to: string }>;
}

export interface DomotzAlertProfile {
  id: number;
  name: string;
  type: string;
  enabled: boolean;
}

export interface DomotzPowerOutlet {
  id: number;
  label: string;
  status: 'on' | 'off' | 'unknown';
  device_id: number;
}

export interface DomotzUser {
  id: number;
  email: string;
  display_name: string;
}
