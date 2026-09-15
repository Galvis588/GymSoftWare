import { ServiceVentas } from "../services/ServiceVentas.js";

export const ControllerVentas = {

    obtenerTodos: async (req, res) => {
        try {
            const ventas = await ServiceVentas.listar();
            res.status(200).json(ventas);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener las ventas", error: error.message });
        }
    },

    obtenerUno: async (req, res) => {
        try {
            const { id } = req.params;
            const venta = await ServiceVentas.obtener(id);
            if (!venta) {
                return res.status(404).json({ mensaje: "Venta no encontrada" });
            }
            res.status(200).json(venta);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener la venta", error: error.message });
        }
    },

    crear: async (req, res) => {
        try {
            const nuevaVenta = await ServiceVentas.registrar(req.body);
            res.status(201).json(nuevaVenta);
        } catch (error) {
            res.status(400).json({ mensaje: "Error al crear la venta", error: error.message });
        }
    },

    actualizar: async (req, res) => {
        try {
            const { id } = req.params;
            const ventaActualizada = await ServiceVentas.modificar(id, req.body);
            if (!ventaActualizada) {
                return res.status(404).json({ mensaje: "Venta no encontrada" });
            }
            res.status(200).json(ventaActualizada);
        } catch (error) {
            res.status(400).json({ mensaje: "Error al actualizar la venta", error: error.message });
        }
    },

    eliminar: async (req, res) => {
        try {
            const { id } = req.params;
            const ventaEliminada = await ServiceVentas.borrar(id);
            if (!ventaEliminada) {
                return res.status(404).json({ mensaje: "Venta no encontrada" });
            }
            res.status(200).json({ mensaje: "Venta eliminada correctamente" });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al eliminar la venta", error: error.message });
        }
    }

};
