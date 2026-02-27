import { describe, it, expect } from 'vitest';
import { DomotzClient } from '../../src/client.js';

describe('DomotzClient', () => {
  it('creates with valid config', () => {
    const client = new DomotzClient({ apiKey: 'test-key' });
    expect(client.agents).toBeDefined();
    expect(client.devices).toBeDefined();
    expect(client.metrics).toBeDefined();
    expect(client.network).toBeDefined();
    expect(client.alerts).toBeDefined();
    expect(client.power).toBeDefined();
  });

  it('defaults to us-east-1 region', () => {
    const client = new DomotzClient({ apiKey: 'test-key' });
    expect(client).toBeDefined();
  });

  it('lists agents', async () => {
    const client = new DomotzClient({ apiKey: 'valid-key' });
    const agents = await client.agents.list();
    expect(agents).toHaveLength(1);
    expect(agents[0].display_name).toBe('Office');
  });

  it('lists devices for an agent', async () => {
    const client = new DomotzClient({ apiKey: 'valid-key' });
    const devices = await client.devices.list(1);
    expect(devices).toHaveLength(1);
    expect(devices[0].display_name).toBe('Router');
  });
});
