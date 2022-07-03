import express, { Request, Response } from "express";
import cors from "cors";
import { ValidationError } from "express-validation";

import accountRoutes from "./routes/account";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", accountRoutes);

app.use(function (err, res) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err);
    }
  
    return res.status(500).json(err);
  });

export default app;
