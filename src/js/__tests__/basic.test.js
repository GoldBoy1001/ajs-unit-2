import getHeroHealthStatus from '../basic';

test('should health', () => {
  const result = getHeroHealthStatus({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('should critical', () => {
  const result = getHeroHealthStatus({ name: 'Маг', health: 14 });
  expect(result).toBe('critical');
});

test('should wounded', () => {
  const result = getHeroHealthStatus({ name: 'Маг', health: 50 });
  expect(result).toBe('wounded');
});
