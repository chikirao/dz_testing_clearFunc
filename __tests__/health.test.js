import { getHealthStatus } from '../src/health';

test('health is above 50 - healthy', () => {
    const result = getHealthStatus({ name: 'Маг', health: 90 });
    expect(result).toBe('healthy');
});

test('health is between 15 and 50 - wounded', () => {
    const result = getHealthStatus({ name: 'Маг', health: 50 });
    expect(result).toBe('wounded');
});

test('health is below 15 - critical', () => {
    const result = getHealthStatus({ name: 'Маг', health: 10 });
    expect(result).toBe('critical');
});
