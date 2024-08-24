import healthIndicator from '../src/healthIndicator';

test('health is greater than 50', () => {
  const result = healthIndicator({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('health is between 50 and 15', () => {
  const result = healthIndicator({ name: 'Маг', health: 50 });
  expect(result).toBe('wounded');
});

test('health is less than 15', () => {
  const result = healthIndicator({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});
