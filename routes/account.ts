import express from "express";

import { validate } from "express-validation";

import * as accountController from "../controllers/account.controller";
import * as accountValidator from "../controllers/account.validator";

const router = express.Router();

router.post(
  "/register",
  validate(accountValidator.register, { keyByField: true }),
  accountController.register
);

export default router;
