import axios from "axios";
import Country from '../src/interfaces'


const dataInfo = async (): Promise<Country[]> => {
  try {
    const info = await axios.get("https://restcountries.com/v3/all");

    const data = await info.data.map((el: any) => {
     
      return {
        id: el.cca3,
        country: el.name.common,
        capital: el.capital ? el.capital[0] : " Capital not found",
        region: el.region,
        subregion: el.subregion ? el.subregion : "Subregion not found",
        area: el.area ? el.area : null,
        population: el.population ? el.population : null,
        continent: el.continents.toString(),
        flag: el.flags? el.flags[1] : "Flag not found",
      } 
    });

    return data;
  } catch (error) {
    console.error(`error in libs ${error}`);
    return [];
  }
};

export default dataInfo;