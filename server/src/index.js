import express from "express";
import connectDB from "./config/db.js";
import { PORT } from "./utils/contants.js";
import { Engagement } from "./models/engagement.model.js";

const app = express();

connectDB()
  .then(() => {
    app.get("/", (_, res) => {
      res.send(`<h1>hey fgfhfhfghfghdfsdsfdfsdf</h1>`);
    });

    app.listen(PORT || 8001, () => {
      console.log(`App is listening at the port !! ${PORT} `);
    });

    app.on("error", (error) => {
      console.log(`server Error ${error}`);
    });
  })
  .catch(() => {
    console.log(`MongoDB Connection failed`);
  });

// app.get("/", (req, res) => {
//     res.send(`<h1>Hey you really made your first appliction </h1>`)
// });

// app.listen(port,()=>{
//     console.log("App is listening at the port ", port)
// } )
