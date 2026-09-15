import { Pago } from "../models/ModelPagos.js";
import { Usuario } from "../models/ModelUsuarios.js";
import { Membresia } from "../models/ModelMembresias.js";

export const RepositoryPagos = {

    obtenerTodos: async () => {
        return await Pago.findAll({ include: [Usuario, Membresia] });
    },

    obtenerPorId: async (id_pago) => {
        return await Pago.findByPk(id_pago, { include: [Usuario, Membresia] });
    },

    crear: async (datos) => {
        return await Pago.create(datos);
    },

    actualizar: async (id_pago, datos) => {
        const pago = await Pago.findByPk(id_pago);
        if (!pago) return null;
        return await pago.update(datos);
    },

    eliminar: async (id_pago) => {
        const pago = await Pago.findByPk(id_pago);
        if (!pago) return null;
        await pago.destroy();
        return pago;
    }

};
