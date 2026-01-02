import express from "express";
import connectDB from "./config/db.js";
import { PORT } from "./contants.js";

const app = express();

connectDB()
  .then(() => {
    app.get("/", (_, res) => {
      res.send(`<h1>hey From index.js </h1>`);
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
