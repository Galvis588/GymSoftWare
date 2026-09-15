import { Venta } from "../models/ModelVentas.js";
import { Producto } from "../models/ModelProductos.js";
import { Usuario } from "../models/ModelUsuarios.js";

export const RepositoryVentas = {

    obtenerTodos: async () => {
        return await Venta.findAll({ include: [Producto, Usuario] });
    },

    obtenerPorId: async (id_venta) => {
        return await Venta.findByPk(id_venta, { include: [Producto, Usuario] });
    },

    crear: async (datos) => {
        return await Venta.create(datos);
    },

    actualizar: async (id_venta, datos) => {
        const venta = await Venta.findByPk(id_venta);
        if (!venta) return null;
        return await venta.update(datos);
    },

    eliminar: async (id_venta) => {
        const venta = await Venta.findByPk(id_venta);
        if (!venta) return null;
        await venta.destroy();
        return venta;
    }

};
