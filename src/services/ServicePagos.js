import { RepositoryPagos } from "../repositories/RepositoryPagos.js";

export const ServicePagos = {

    listar: async () => {
        return await RepositoryPagos.obtenerTodos();
    },

    obtener: async (id_pago) => {
        return await RepositoryPagos.obtenerPorId(id_pago);
    },

    registrar: async (datos) => {
        if (!datos.id_usuario || !datos.id_membresia) {
            throw new Error("Faltan datos obligatorios: id_usuario, id_membresia");
        }
        return await RepositoryPagos.crear(datos);
    },

    modificar: async (id_pago, datos) => {
        return await RepositoryPagos.actualizar(id_pago, datos);
    },

    borrar: async (id_pago) => {
        return await RepositoryPagos.eliminar(id_pago);
    }

};
