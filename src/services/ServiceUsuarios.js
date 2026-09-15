import { RepositoryUsuarios } from "../repositories/RepositoryUsuarios.js";

export const ServiceUsuarios = {

    listar: async () => {
        return await RepositoryUsuarios.obtenerTodos();
    },

    obtener: async (id_usuario) => {
        return await RepositoryUsuarios.obtenerPorId(id_usuario);
    },

    registrar: async (datos) => {
        if (!datos.nombre || !datos.documento || !datos.telefono || !datos.edad) {
            throw new Error("Faltan datos obligatorios: nombre, documento, telefono, edad");
        }
        return await RepositoryUsuarios.crear(datos);
    },

    modificar: async (id_usuario, datos) => {
        return await RepositoryUsuarios.actualizar(id_usuario, datos);
    },

    borrar: async (id_usuario) => {
        return await RepositoryUsuarios.eliminar(id_usuario);
    }

};
