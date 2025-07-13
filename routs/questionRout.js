import express from "express";
import {
    getCustomersByCountry,
    getHowManyProductsByProductLine,
    getmEployeesByReportsId,
  } from "../dal/riddleDal.js";

const router = express.Router();

router.get("/question1", getCustomersByCountry);
router.get("/question2", getmEployeesByReportsId);
router.get("/question3", getHowManyProductsByProductLine);

export default router;