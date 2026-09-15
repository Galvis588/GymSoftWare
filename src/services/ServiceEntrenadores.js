import { RepositoryEntrenadores } from "../repositories/RepositoryEntrenadores.js";

export const ServiceEntrenadores = {

    listar: async () => {
        return await RepositoryEntrenadores.obtenerTodos();
    },

    obtener: async (id_entrenador) => {
        return await RepositoryEntrenadores.obtenerPorId(id_entrenador);
    },

    registrar: async (datos) => {
        if (!datos.nombre || !datos.edad || !datos.especializacion) {
            throw new Error("Faltan datos obligatorios: nombre, edad, especializacion");
        }
        return await RepositoryEntrenadores.crear(datos);
    },

    modificar: async (id_entrenador, datos) => {
        return await RepositoryEntrenadores.actualizar(id_entrenador, datos);
    },

    borrar: async (id_entrenador) => {
        return await RepositoryEntrenadores.eliminar(id_entrenador);
    }

};
