import { ServicePagos } from "../services/ServicePagos.js";

export const ControllerPagos = {

    obtenerTodos: async (req, res) => {
        try {
            const pagos = await ServicePagos.listar();
            res.status(200).json(pagos);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener los pagos", error: error.message });
        }
    },

    obtenerUno: async (req, res) => {
        try {
            const { id } = req.params;
            const pago = await ServicePagos.obtener(id);
            if (!pago) {
                return res.status(404).json({ mensaje: "Pago no encontrado" });
            }
            res.status(200).json(pago);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener el pago", error: error.message });
        }
    },

    crear: async (req, res) => {
        try {
            const nuevoPago = await ServicePagos.registrar(req.body);
            res.status(201).json(nuevoPago);
        } catch (error) {
            res.status(400).json({ mensaje: "Error al crear el pago", error: error.message });
        }
    },

    actualizar: async (req, res) => {
        try {
            const { id } = req.params;
            const pagoActualizado = await ServicePagos.modificar(id, req.body);
            if (!pagoActualizado) {
                return res.status(404).json({ mensaje: "Pago no encontrado" });
            }
            res.status(200).json(pagoActualizado);
        } catch (error) {
            res.status(400).json({ mensaje: "Error al actualizar el pago", error: error.message });
        }
    },

    eliminar: async (req, res) => {
        try {
            const { id } = req.params;
            const pagoEliminado = await ServicePagos.borrar(id);
            if (!pagoEliminado) {
                return res.status(404).json({ mensaje: "Pago no encontrado" });
            }
            res.status(200).json({ mensaje: "Pago eliminado correctamente" });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al eliminar el pago", error: error.message });
        }
    }

};
