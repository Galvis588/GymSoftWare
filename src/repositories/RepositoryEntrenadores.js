import { Entrenador } from "../models/ModelEntrenadores.js";

export const RepositoryEntrenadores = {

    obtenerTodos: async () => {
        return await Entrenador.findAll();
    },

    obtenerPorId: async (id_entrenador) => {
        return await Entrenador.findByPk(id_entrenador);
    },

    crear: async (datos) => {
        return await Entrenador.create(datos);
    },

    actualizar: async (id_entrenador, datos) => {
        const entrenador = await Entrenador.findByPk(id_entrenador);
        if (!entrenador) return null;
        return await entrenador.update(datos);
    },

    eliminar: async (id_entrenador) => {
        const entrenador = await Entrenador.findByPk(id_entrenador);
        if (!entrenador) return null;
        await entrenador.destroy();
        return entrenador;
    }

};
