import { ServiceMembresias } from "../services/ServiceMembresias.js";

export const ControllerMembresias = {

    obtenerTodos: async (req, res) => {
        try {
            const membresias = await ServiceMembresias.listar();
            res.status(200).json(membresias);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener las membresias", error: error.message });
        }
    },

    obtenerUno: async (req, res) => {
        try {
            const { id } = req.params;
            const membresia = await ServiceMembresias.obtener(id);
            if (!membresia) {
                return res.status(404).json({ mensaje: "Membresia no encontrada" });
            }
            res.status(200).json(membresia);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener la membresia", error: error.message });
        }
    },

    crear: async (req, res) => {
        try {
            const nuevaMembresia = await ServiceMembresias.registrar(req.body);
            res.status(201).json(nuevaMembresia);
        } catch (error) {
            res.status(400).json({ mensaje: "Error al crear la membresia", error: error.message });
        }
    },

    actualizar: async (req, res) => {
        try {
            const { id } = req.params;
            const membresiaActualizada = await ServiceMembresias.modificar(id, req.body);
            if (!membresiaActualizada) {
                return res.status(404).json({ mensaje: "Membresia no encontrada" });
            }
            res.status(200).json(membresiaActualizada);
        } catch (error) {
            res.status(400).json({ mensaje: "Error al actualizar la membresia", error: error.message });
        }
    },

    eliminar: async (req, res) => {
        try {
            const { id } = req.params;
            const membresiaEliminada = await ServiceMembresias.borrar(id);
            if (!membresiaEliminada) {
                return res.status(404).json({ mensaje: "Membresia no encontrada" });
            }
            res.status(200).json({ mensaje: "Membresia eliminada correctamente" });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al eliminar la membresia", error: error.message });
        }
    }

};
