import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const Pago = conn.define("Pago", {

    id_pago: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    id_membresia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    pago: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

}, {
    tableName: "pagos",
    timestamps: false
});
