import { ServiceEntrenadores } from "../services/ServiceEntrenadores.js";

export const ControllerEntrenadores = {

    obtenerTodos: async (req, res) => {
        try {
            const entrenadores = await ServiceEntrenadores.listar();
            res.status(200).json(entrenadores);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener los entrenadores", error: error.message });
        }
    },

    obtenerUno: async (req, res) => {
        try {
            const { id } = req.params;
            const entrenador = await ServiceEntrenadores.obtener(id);
            if (!entrenador) {
                return res.status(404).json({ mensaje: "Entrenador no encontrado" });
            }
            res.status(200).json(entrenador);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener el entrenador", error: error.message });
        }
    },

    crear: async (req, res) => {
        try {
            const nuevoEntrenador = await ServiceEntrenadores.registrar(req.body);
            res.status(201).json(nuevoEntrenador);
        } catch (error) {
            res.status(400).json({ mensaje: "Error al crear el entrenador", error: error.message });
        }
    },

    actualizar: async (req, res) => {
        try {
            const { id } = req.params;
            const entrenadorActualizado = await ServiceEntrenadores.modificar(id, req.body);
            if (!entrenadorActualizado) {
                return res.status(404).json({ mensaje: "Entrenador no encontrado" });
            }
            res.status(200).json(entrenadorActualizado);
        } catch (error) {
            res.status(400).json({ mensaje: "Error al actualizar el entrenador", error: error.message });
        }
    },

    eliminar: async (req, res) => {
        try {
            const { id } = req.params;
            const entrenadorEliminado = await ServiceEntrenadores.borrar(id);
            if (!entrenadorEliminado) {
                return res.status(404).json({ mensaje: "Entrenador no encontrado" });
            }
            res.status(200).json({ mensaje: "Entrenador eliminado correctamente" });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al eliminar el entrenador", error: error.message });
        }
    }

};
