import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import cors from "cors";
import UserController from "./controllers/userController";
import RoleController from "./controllers/roleController";

const app = express();
const port = 3000;
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

createConnection().then((connection) => {
  app.use(cors());
  app.use("/user", UserController);
  app.use("/roles", RoleController);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
