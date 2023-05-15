import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

const database: string = process.env.database || "";
const user: string = process.env.user || "";
const host: string = process.env.host || "";
const password: string = process.env.password || "";
const port: number = Number(process.env.port);

const AwsEc2Database = new Sequelize(database, user, password, {
  host,
  port: port,
  dialect: "postgres",
  logging: false,
});

async function testConnection(conn: any) {
  try {
    await conn.authenticate();
    console.log("Connection has been established successfully...");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection(AwsEc2Database);

export { AwsEc2Database }
