import { Usuario } from "../models/ModelUsuarios.js";
import { Entrenador } from "../models/ModelEntrenadores.js";

export const RepositoryUsuarios = {

    obtenerTodos: async () => {
        return await Usuario.findAll({ include: Entrenador });
    },

    obtenerPorId: async (id_usuario) => {
        return await Usuario.findByPk(id_usuario, { include: Entrenador });
    },

    crear: async (datos) => {
        return await Usuario.create(datos);
    },

    actualizar: async (id_usuario, datos) => {
        const usuario = await Usuario.findByPk(id_usuario);
        if (!usuario) return null;
        return await usuario.update(datos);
    },

    eliminar: async (id_usuario) => {
        const usuario = await Usuario.findByPk(id_usuario);
        if (!usuario) return null;
        await usuario.destroy();
        return usuario;
    }

};
