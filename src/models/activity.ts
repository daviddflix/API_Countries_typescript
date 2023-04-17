import { DataTypes, Model } from "sequelize";
import { AwsEc2Database } from "../database";
import { Activity } from "../interfaces";
import { CountryModel, modelCountry } from "./country";
import { BelongsToManyAddAssociationMixin } from "sequelize/types/associations";


interface ActivityModel extends Model<Activity>, Activity {
  addCountries: BelongsToManyAddAssociationMixin<CountryModel[], Array<number | string>>;
}

const modelActivity = AwsEc2Database.define<ActivityModel>("activities", {
  activity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  difficulty: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false
  },
  season: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  }
});


modelActivity.belongsToMany(modelCountry, {through: 'Actividad'})
modelCountry.belongsToMany(modelActivity, {through: 'Actividad'})


export default modelActivity
