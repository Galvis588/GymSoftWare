import { ServiceUsuarios } from "../services/ServiceUsuarios.js";

export const ControllerUsuarios = {

    obtenerTodos: async (req, res) => {
        try {
            const usuarios = await ServiceUsuarios.listar();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener los usuarios", error: error.message });
        }
    },

    obtenerUno: async (req, res) => {
        try {
            const { id } = req.params;
            const usuario = await ServiceUsuarios.obtener(id);
            if (!usuario) {
                return res.status(404).json({ mensaje: "Usuario no encontrado" });
            }
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener el usuario", error: error.message });
        }
    },

    crear: async (req, res) => {
        try {
            const nuevoUsuario = await ServiceUsuarios.registrar(req.body);
            res.status(201).json(nuevoUsuario);
        } catch (error) {
            res.status(400).json({ mensaje: "Error al crear el usuario", error: error.message });
        }
    },

    actualizar: async (req, res) => {
        try {
            const { id } = req.params;
            const usuarioActualizado = await ServiceUsuarios.modificar(id, req.body);
            if (!usuarioActualizado) {
                return res.status(404).json({ mensaje: "Usuario no encontrado" });
            }
            res.status(200).json(usuarioActualizado);
        } catch (error) {
            res.status(400).json({ mensaje: "Error al actualizar el usuario", error: error.message });
        }
    },

    eliminar: async (req, res) => {
        try {
            const { id } = req.params;
            const usuarioEliminado = await ServiceUsuarios.borrar(id);
            if (!usuarioEliminado) {
                return res.status(404).json({ mensaje: "Usuario no encontrado" });
            }
            res.status(200).json({ mensaje: "Usuario eliminado correctamente" });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al eliminar el usuario", error: error.message });
        }
    }

};
