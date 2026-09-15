// ValidationMiddleware.js
// Middleware transversal encargado de validar el "body" de la petición
// contra un esquema de Joi ANTES de que llegue al Controlador.
// Así los Controladores y Services ya no tienen que preocuparse por
// verificar que los campos obligatorios existan o tengan el tipo correcto.

export const validarEsquema = (esquema) => {
    return (req, res, next) => {
        const { error } = esquema.validate(req.body, {
            abortEarly: false,   // reporta todos los errores, no solo el primero
            stripUnknown: true   // ignora campos que no están definidos en el esquema
        });

        if (error) {
            const detalles = error.details.map((detalle) => detalle.message);
            return res.status(400).json({
                mensaje: "Error de validación en los datos enviados",
                errores: detalles
            });
        }

        next();
    };
};