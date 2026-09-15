// errorMiddleware.js
// Dos middlewares transversales para registrar al final de index.js:
//
// 1. rutaNoEncontrada: captura cualquier petición que no coincide con
//    ninguna ruta definida (404).
// 2. manejarErrores: middleware de error de Express (4 parámetros).
//    Cualquier "next(error)" o excepción no controlada en capas
//    anteriores termina aquí, para no dejar peticiones colgadas ni
//    stacktraces filtrándose al cliente.

export const rutaNoEncontrada = (req, res, next) => {
    res.status(404).json({
        mensaje: `Ruta no encontrada: ${req.method} ${req.originalUrl}`
    });
};

export const manejarErrores = (err, req, res, next) => {
    console.error("[Error no controlado]", err);

    const codigo = err.statusCode || 500;

    res.status(codigo).json({
        mensaje: "Ocurrió un error inesperado en el servidor",
        error: err.message
    });
};