import express from "express";
import { conn } from "./src/config/database.js";
import { PORT_SERVER, HOST_SERVER } from "./src/config/credentials.js";

import "./src/models/Relaciones.js";

const app = express();

app.use(express.json());


// CONEXIÓN CON LA BASE DE DATOS

conn.authenticate()
    .then(() => {
        console.log("Conexión establecida con la base de datos");

        return conn.sync();
    })
    .then(() => {
        console.log("Base de datos sincronizada correctamente");
    })
    .catch((error) => {
        console.log("Error al conectar con la base de datos: " + error);
    });


// SERVIDOR

app.listen(PORT_SERVER, () => {
    console.log(
        `Servidor funcionando de forma correcta en ${HOST_SERVER}${PORT_SERVER}`
    );
});