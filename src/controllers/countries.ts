import { Response, Request } from "express";
import { Op } from "sequelize";
import Country from "../interfaces";
import modelActivity from "../models/activity";
import { modelCountry } from "../models/country";

const countries = async (req: Request, res: Response) => {

  const page = req.query.page || 1;
  const limit: number = 10;
  const offset = (Number(page) - 1) * limit; 
  const { country } = req.query;
  const countryData = await modelCountry.findAndCountAll({ offset, limit });
  
  const totalPages = Math.ceil(countryData.count / limit);

  try {
    if (countryData.count > 0) {
      if (country) {

          const foundCountry = await modelCountry.findAndCountAll({
          where: { country: { [Op.iLike]: "%" + country + "%" } },
           offset, limit 
        });

        const totalPages = Math.ceil(foundCountry.count / limit);
        if (foundCountry.count > 0) {

          res.send({
            data: foundCountry.rows,
            currentPage: page,
            totalPages,
          });

        } else {
          res.send("No country was found");
        }

      } else {
        res.send({
          data: countryData.rows,
          currentPage: page,
          totalPages,
        });
      }
    } else {
      res.send("Error in database connection");
    }
  } catch (error) {
    console.error("errorazo", error);
  }
};




const countriesById = async (req : Request, res: Response) => {

   const { id } = req.params;
   
   try {
      const foundCountry : Country | null  = await modelCountry.findByPk(id.toUpperCase(), {include: modelActivity});
      foundCountry !== null ? res.send(foundCountry) : res.send('No country found with given id')
      
   } catch (error) {
      console.error("errorazo", error);
   }

}

export {countries, countriesById};
