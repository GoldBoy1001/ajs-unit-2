export default function getHeroHealthStatus(heroData) {
  if (heroData.health <= 15) {
    return 'critical';
  }
  if (heroData.health <= 50) {
    return 'wounded';
  }
  return 'healthy';
}
