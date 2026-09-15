import { DB_NAME, DB_USER, DB_PASSWORD, OBJ_CONN } from "./credentials.js";
import { Sequelize } from "sequelize";

export const conn = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, OBJ_CONN);
