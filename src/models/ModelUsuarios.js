import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const Usuario = conn.define("Usuario", {

    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    documento: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    id_entrenador: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

}, {
    tableName: "usuarios",
    timestamps: false
});
