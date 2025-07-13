import express from "express";
import { config } from "dotenv";
import routQoery from "./routs/questionrout.js";
config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use("/", routQoery)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
