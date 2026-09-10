import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const Membresia = conn.define("Membresia", {

    id_membresia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },

    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    tableName: "membresias",
    timestamps: false
});