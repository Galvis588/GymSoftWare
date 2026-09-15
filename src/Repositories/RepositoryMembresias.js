import { Membresia } from "../models/ModelMembresias.js";

export const RepositoryMembresias = {

    obtenerTodos: async () => {
        return await Membresia.findAll();
    },

    obtenerPorId: async (id_membresia) => {
        return await Membresia.findByPk(id_membresia);
    },

    crear: async (datos) => {
        return await Membresia.create(datos);
    },

    actualizar: async (id_membresia, datos) => {
        const membresia = await Membresia.findByPk(id_membresia);
        if (!membresia) return null;
        return await membresia.update(datos);
    },

    eliminar: async (id_membresia) => {
        const membresia = await Membresia.findByPk(id_membresia);
        if (!membresia) return null;
        await membresia.destroy();
        return membresia;
    }

};
