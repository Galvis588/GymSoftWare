import { RepositoryMembresias } from "../repositories/RepositoryMembresias.js";

export const ServiceMembresias = {

    listar: async () => {
        return await RepositoryMembresias.obtenerTodos();
    },

    obtener: async (id_membresia) => {
        return await RepositoryMembresias.obtenerPorId(id_membresia);
    },

    registrar: async (datos) => {
        if (!datos.nombre || !datos.descripcion || datos.precio == null) {
            throw new Error("Faltan datos obligatorios: nombre, descripcion, precio");
        }
        return await RepositoryMembresias.crear(datos);
    },

    modificar: async (id_membresia, datos) => {
        return await RepositoryMembresias.actualizar(id_membresia, datos);
    },

    borrar: async (id_membresia) => {
        return await RepositoryMembresias.eliminar(id_membresia);
    }

};
