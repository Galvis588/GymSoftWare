import { Producto } from "../models/ModelProductos.js";

export const RepositoryProductos = {

    obtenerTodos: async () => {
        return await Producto.findAll();
    },

    obtenerPorId: async (id_producto) => {
        return await Producto.findByPk(id_producto);
    },

    crear: async (datos) => {
        return await Producto.create(datos);
    },

    actualizar: async (id_producto, datos) => {
        const producto = await Producto.findByPk(id_producto);
        if (!producto) return null;
        return await producto.update(datos);
    },

    eliminar: async (id_producto) => {
        const producto = await Producto.findByPk(id_producto);
        if (!producto) return null;
        await producto.destroy();
        return producto;
    }

};
