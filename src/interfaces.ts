export default interface Country {
    id: string;
    country: string;
    capital: string;
    region: string;
    subregion: string; 
    area?: number | null;
    population?: number | null;
    continent: string;
    flag?: string;
  }


export interface Activity {
  activity: string,
  difficulty : string,
  duration: string,
  season: string,
  country: Array<string>
}


