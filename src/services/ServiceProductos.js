import { RepositoryProductos } from "../repositories/RepositoryProductos.js";

export const ServiceProductos = {

    listar: async () => {
        return await RepositoryProductos.obtenerTodos();
    },

    obtener: async (id_producto) => {
        return await RepositoryProductos.obtenerPorId(id_producto);
    },

    registrar: async (datos) => {
        if (!datos.nombre || datos.precio == null || datos.cantidad == null) {
            throw new Error("Faltan datos obligatorios: nombre, precio, cantidad");
        }
        return await RepositoryProductos.crear(datos);
    },

    modificar: async (id_producto, datos) => {
        return await RepositoryProductos.actualizar(id_producto, datos);
    },

    borrar: async (id_producto) => {
        return await RepositoryProductos.eliminar(id_producto);
    }

};
