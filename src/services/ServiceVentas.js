import { RepositoryVentas } from "../repositories/RepositoryVentas.js";
import { RepositoryProductos } from "../repositories/RepositoryProductos.js";

export const ServiceVentas = {

    listar: async () => {
        return await RepositoryVentas.obtenerTodos();
    },

    obtener: async (id_venta) => {
        return await RepositoryVentas.obtenerPorId(id_venta);
    },

    registrar: async (datos) => {
        if (!datos.id_producto || !datos.id_usuario || !datos.cantidad) {
            throw new Error("Faltan datos obligatorios: id_producto, id_usuario, cantidad");
        }

        const producto = await RepositoryProductos.obtenerPorId(datos.id_producto);
        if (!producto) {
            throw new Error("El producto indicado no existe");
        }
        if (producto.cantidad < datos.cantidad) {
            throw new Error("No hay stock suficiente para esta venta");
        }

        const venta = await RepositoryVentas.crear(datos);

        await RepositoryProductos.actualizar(datos.id_producto, {
            cantidad: producto.cantidad - datos.cantidad
        });

        return venta;
    },

    modificar: async (id_venta, datos) => {
        return await RepositoryVentas.actualizar(id_venta, datos);
    },

    borrar: async (id_venta) => {
        return await RepositoryVentas.eliminar(id_venta);
    }

};
