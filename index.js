import express from "express";
import { config } from "dotenv";
import {
  getCustomersByCountry,
  getHowManyProductsByProductLine,
  getmEployeesByReportsId,
} from "./dal/riddleDal.js";
config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/question1", getCustomersByCountry);
app.get("/question2", getmEployeesByReportsId);
app.get("/question3", getHowManyProductsByProductLine);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
