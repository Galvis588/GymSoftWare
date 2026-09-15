import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const Producto = conn.define("Producto", {

    id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    tableName: "productos",
    timestamps: false
});
