# node-domotz

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)

A Node.js/TypeScript client library for the [Domotz](https://www.domotz.com/) network monitoring API. Domotz is a remote network monitoring and management platform used by MSPs to track devices, agents, and network health across customer sites.

## Installation

```bash
npm install @wyre-technology/node-domotz
```

## Usage

```typescript
import { DomotzClient } from '@wyre-technology/node-domotz';

const domotz = new DomotzClient({
  apiKey: process.env.DOMOTZ_API_KEY!,
  region: 'us-east-1', // or 'eu-central-1'
});

const devices = await domotz.devices.list(agentId);
const uptime = await domotz.devices.getUptime(agentId, deviceId);
```

Get an API key from your Domotz account — see the [Domotz API documentation](https://help.domotz.com/admin-global-features/domotz-api/).

## Resources

The client exposes one namespace per Domotz API area:

| Resource | Covers |
|---|---|
| `agents` | Domotz collector agents (the on-site probes) |
| `devices` | Devices discovered by an agent — list, get, uptime, history |
| `metrics` | Device and network metrics |
| `network` | Network-level data for an agent |
| `alerts` | Alert configuration and history |
| `power` | Power/PoE data where supported by the agent's hardware |

Every method returns a typed response (see `src/types/`). Errors surface as one of `AuthenticationError`, `NotFoundError`, `RateLimitError`, or `ServerError` (all exported from the package root).

## Development

```bash
npm run build       # tsup build (ESM + CJS)
npm test            # vitest
npm run lint
npm run typecheck
```

Releases are automated via semantic-release on merge to `main`.

## License

MIT
