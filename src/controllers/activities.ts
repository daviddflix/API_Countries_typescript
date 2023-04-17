import { Request, Response } from "express";
import { Activity } from "../interfaces";
import modelActivity from "../models/activity";
import { modelCountry } from "../models/country";


const activities = async (req: Request, res: Response) => {
  const act: Activity = req.body;
  const allValuesAreNonEmpty = Object.values(act).every(
    (value) => value.length > 0
  );

  const countries = await modelCountry.findAll({
    where: { country: act.country },
  });

  try {
    if (allValuesAreNonEmpty === true) {
      const newActivity = await modelActivity.create(act);
      await newActivity.addCountries(countries)
      
      res.send(newActivity);
    } else {
      res.send("some values are missing");
    }
  } catch (error) {
    console.error("errorazo", error);
  }
};


const allActivities = async (_req: Request, res: Response) => {

    const acts = await modelActivity.findAll({ attributes: ['activity']})

    acts.length > 0 ? res.send(acts) : res.send('No activities found')
}

export { activities, allActivities };
