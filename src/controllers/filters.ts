import { modelCountry } from "../models/country";
import { Response, Request } from "express";
import { Op } from "sequelize";

const orderFilter = async (req: Request, res: Response) => {
  const { order } = req.params;
  const page = req.query.page || 1;
  const limit: number = 10;
  const offset = (Number(page) - 1) * limit;

  if (order === "ASC" || order === "DESC") {
    const countryData = await modelCountry.findAndCountAll(
      { order: [["country", order.toUpperCase()]], offset,
      limit },
    );
    const totalPages = Math.ceil(countryData.count / limit);

    res.send({
      data: countryData.rows,
      currentPage: page,
      totalPages,
    });

  } else {
    res.send("Accepted values are ASC or DESC");
  }
};

const continentFilter = async (req: Request, res: Response) => {
  const { continent } = req.query;
  const page = req.query.page || 1;
  const limit: number = 10;
  const offset = (Number(page) - 1) * limit;

  const allCountries = await modelCountry.findAndCountAll({
    where: { continent: { [Op.iLike]: "%" + continent + "%" } }, offset, limit
  });
  const totalPages = Math.ceil(allCountries.count / limit);

  allCountries.count > 0
    ? res.send({
        data: allCountries.rows,
        currentPage: page,
        totalPages,
      })
    : res.send("No contries were found");
};

export { orderFilter, continentFilter };
