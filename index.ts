import express, { Application } from "express";
import favicon from "serve-favicon";
import path from "path";
import cors from "cors";
import gets from "./src/routes/get";
import posts from "./src/routes/posts";
import dataInfo from "./libs/restCountries";
import { AwsEc2Database } from "./src/database";
import { modelCountry } from "./src/models/country";

const app: Application = express();
const port: number = 3001;

//MIDDLEWARES
app.use(express.static("public"));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(favicon(path.join(__dirname, "public", "flag.ico")));
app.use(express.urlencoded({ extended: true })); // allows for more complex data structures to be parsed from the request body, such as arrays and nested objects.

//ROUTES
app.use('/', gets);
app.use('/', posts);


//APP INIT
(async () => {
  await AwsEc2Database.sync({ force: true });

  const countriesData = await dataInfo();

  try {
    const data = await modelCountry.findAll(); // gets the data from the table
    
    if (data.length === 0) {
        await modelCountry.bulkCreate(countriesData);
   
     
    }
  } catch (error) {
    console.error(`error en index ${error}`);
  }

  app.listen(port, async (err?: Error) => {

    err
      ? console.error("error in server index", err)
      : console.log("server listening on port:", port);
  });

})();
