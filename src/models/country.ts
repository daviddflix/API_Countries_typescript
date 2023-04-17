import { DataTypes, Model } from "sequelize";
import { AwsEc2Database } from "../database";
import Country from "../interfaces";

export interface CountryModel extends Model<Country>, Country {}

export const modelCountry = AwsEc2Database.define<CountryModel>("countries", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,  
  },
  country: {
    type: DataTypes.STRING,
  },
  capital: {
    type: DataTypes.STRING,
  },
  region: {
    type: DataTypes.STRING,
  },
  subregion: {
    type: DataTypes.STRING,
  },
  area: {
    type: DataTypes.INTEGER,
  },
  population: {
    type: DataTypes.INTEGER,
  },
  continent: {
    type: DataTypes.STRING,
  },
  flag: {
    type: DataTypes.STRING,
  },
});
