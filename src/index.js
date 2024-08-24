import { getHealthStatus } from './health';

const player = { name: 'Маг', health: 90 };
console.log(`${player.name} is ${getHealthStatus(player)}`);
