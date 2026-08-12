import {conn} from "./src/config/database.js";
import {PORT_SERVER, HOST_SERVER} from "./src/config/credentials.js";
import express from "express";

const app = express();
app.listen(PORT_SERVER, () => {
    console.log(`Servidor Funcionandoo de forma correcta en ${HOST_SERVER}${PORT_SERVER}`);
});

app.get("/cliente", (req, res) => {
    res.send();
});

conn.authenticate()
.then(() => {
    console.log("Conexión establecida con la base de datos");
})
.catch((error) => {
    console.log("Error al conectar con la base de datos" + error);
})