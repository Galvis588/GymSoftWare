import { ServiceProductos } from "../services/ServiceProductos.js";

export const ControllerProductos = {

    obtenerTodos: async (req, res) => {
        try {
            const productos = await ServiceProductos.listar();
            res.status(200).json(productos);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener los productos", error: error.message });
        }
    },

    obtenerUno: async (req, res) => {
        try {
            const { id } = req.params;
            const producto = await ServiceProductos.obtener(id);
            if (!producto) {
                return res.status(404).json({ mensaje: "Producto no encontrado" });
            }
            res.status(200).json(producto);
        } catch (error) {
            res.status(500).json({ mensaje: "Error al obtener el producto", error: error.message });
        }
    },

    crear: async (req, res) => {
        try {
            const nuevoProducto = await ServiceProductos.registrar(req.body);
            res.status(201).json(nuevoProducto);
        } catch (error) {
            res.status(400).json({ mensaje: "Error al crear el producto", error: error.message });
        }
    },

    actualizar: async (req, res) => {
        try {
            const { id } = req.params;
            const productoActualizado = await ServiceProductos.modificar(id, req.body);
            if (!productoActualizado) {
                return res.status(404).json({ mensaje: "Producto no encontrado" });
            }
            res.status(200).json(productoActualizado);
        } catch (error) {
            res.status(400).json({ mensaje: "Error al actualizar el producto", error: error.message });
        }
    },

    eliminar: async (req, res) => {
        try {
            const { id } = req.params;
            const productoEliminado = await ServiceProductos.borrar(id);
            if (!productoEliminado) {
                return res.status(404).json({ mensaje: "Producto no encontrado" });
            }
            res.status(200).json({ mensaje: "Producto eliminado correctamente" });
        } catch (error) {
            res.status(500).json({ mensaje: "Error al eliminar el producto", error: error.message });
        }
    }

};
