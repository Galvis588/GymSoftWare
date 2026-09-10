import { Usuario } from "./ModelUsuarios.js";
import { Entrenador } from "./ModelEntrenadores.js";
import { Membresia } from "./ModelMembresias.js";
import { Pago } from "./ModelPagos.js";
import { Producto } from "./ModelProductos.js";
import { Venta } from "./ModelVentas.js";


// ENTRENADORES - USUARIOS

Entrenador.hasMany(Usuario, {
    foreignKey: "id_entrenador"
});

Usuario.belongsTo(Entrenador, {
    foreignKey: "id_entrenador"
});


// USUARIOS - PAGOS

Usuario.hasMany(Pago, {
    foreignKey: "id_usuario"
});

Pago.belongsTo(Usuario, {
    foreignKey: "id_usuario"
});


// MEMBRESIAS - PAGOS

Membresia.hasMany(Pago, {
    foreignKey: "id_membresia"
});

Pago.belongsTo(Membresia, {
    foreignKey: "id_membresia"
});


// PRODUCTOS - VENTAS

Producto.hasMany(Venta, {
    foreignKey: "id_producto"
});

Venta.belongsTo(Producto, {
    foreignKey: "id_producto"
});


// USUARIOS - VENTAS

Usuario.hasMany(Venta, {
    foreignKey: "id_usuario"
});

Venta.belongsTo(Usuario, {
    foreignKey: "id_usuario"
});