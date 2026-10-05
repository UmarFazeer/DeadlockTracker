class DeadlockServices {
  async getHeroStats(accountId: number){
    const url 
    = `https://api.deadlock-api.com/v1/players/hero-stats?account_ids=${accountId}`;
// calling the url
    const response = await fetch(url);
// parsing the response to json and returning it as an array of any type
    const data = await response.json() as any[];

    return data;
  }

  // Find hero by ID
  async getHeroStatsByHero(accountId: number, heroId: number){

    // saves hero stats 
    const allHeroStats = await this.getHeroStats(accountId);
    // parses hero stats searching for hero ID 
    const heroStats = allHeroStats.find((hero: any) => hero.hero_id === heroId
    
  );
  return heroStats;
 
}}

export default DeadlockServices;