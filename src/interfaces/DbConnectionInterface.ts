import * as Sequelize from "sequelize";
import { ModelsInterface } from "./ModelsInterface";

export interface DbConnetcion extends ModelsInterface {

  sequelize: Sequelize.Sequelize

}