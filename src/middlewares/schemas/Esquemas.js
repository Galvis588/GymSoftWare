// Esquemas.js
// Reglas de validación de entrada (forma/tipo de los datos) por entidad.
// Ojo: esto es distinto a la lógica de negocio que ya vive en los Services
// (ej. verificar stock disponible en ServiceVentas). Aquí solo se valida
// que la petición traiga los campos correctos antes de tocar el Controller.

import Joi from "joi";

export const esquemaEntrenador = Joi.object({
    nombre: Joi.string().min(2).max(100).required(),
    edad: Joi.number().integer().min(18).max(80).required(),
    especializacion: Joi.string().min(2).max(100).required()
});

export const esquemaMembresia = Joi.object({
    nombre: Joi.string().min(2).max(100).required(),
    descripcion: Joi.string().min(2).max(255).required(),
    precio: Joi.number().integer().min(0).required()
});

export const esquemaPago = Joi.object({
    id_usuario: Joi.number().integer().required(),
    id_membresia: Joi.number().integer().required(),
    pago: Joi.boolean().optional()
});

export const esquemaProducto = Joi.object({
    nombre: Joi.string().min(2).max(100).required(),
    precio: Joi.number().integer().min(0).required(),
    cantidad: Joi.number().integer().min(0).required()
});

export const esquemaUsuario = Joi.object({
    nombre: Joi.string().min(2).max(100).required(),
    documento: Joi.number().integer().required(),
    telefono: Joi.number().integer().required(),
    edad: Joi.number().integer().min(0).max(120).required(),
    id_entrenador: Joi.number().integer().optional().allow(null)
});

export const esquemaVenta = Joi.object({
    id_producto: Joi.number().integer().required(),
    id_usuario: Joi.number().integer().required(),
    cantidad: Joi.number().integer().min(1).required()
});

// Esquemas "parciales" para actualizaciones (PUT): ningún campo obligatorio,
// pero si viene, debe cumplir el mismo tipo/formato.
export const esquemaEntrenadorUpdate = esquemaEntrenador.fork(
    ["nombre", "edad", "especializacion"], (campo) => campo.optional()
);
export const esquemaMembresiaUpdate = esquemaMembresia.fork(
    ["nombre", "descripcion", "precio"], (campo) => campo.optional()
);
export const esquemaPagoUpdate = esquemaPago.fork(
    ["id_usuario", "id_membresia"], (campo) => campo.optional()
);
export const esquemaProductoUpdate = esquemaProducto.fork(
    ["nombre", "precio", "cantidad"], (campo) => campo.optional()
);
export const esquemaUsuarioUpdate = esquemaUsuario.fork(
    ["nombre", "documento", "telefono", "edad"], (campo) => campo.optional()
);
export const esquemaVentaUpdate = esquemaVenta.fork(
    ["id_producto", "id_usuario", "cantidad"], (campo) => campo.optional()
);