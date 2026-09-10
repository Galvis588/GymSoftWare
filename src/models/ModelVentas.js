import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const Venta = conn.define("Venta", {

    id_venta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    tableName: "ventas",
    timestamps: false
});