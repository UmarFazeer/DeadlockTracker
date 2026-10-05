class DeadlockServices {
  async getHeroStats(accountId: number){
    const url 
    = `https://api.deadlock-api.com/v1/players/hero-stats?account_ids=${accountId}`;

    const response = await fetch(url);

    const data = await response.json() as any[];

    return data;
  }

  // Find hero by ID
  async getHeroStatsByHero(accountId: number, heroId: number){
    const allHeroStats = await this.getHeroStats(accountId);

    const heroStats = allHeroStats.find(
    (hero: any) => hero.hero_id === heroId
    
  );
  return heroStats;
 
}}

//fetch("https://api.deadlocktracker.com/v1/players/1540871133/hero-stats")
export default DeadlockServices;