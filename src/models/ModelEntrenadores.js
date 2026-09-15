import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const Entrenador = conn.define("Entrenador", {

    id_entrenador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    especializacion: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName: "entrenadores",
    timestamps: false
});
