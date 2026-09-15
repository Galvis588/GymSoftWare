import { Router } from "express";

import RouteProductos from "./RouteProductos.js";
import RouteUsuarios from "./RouteUsuarios.js";
import RouteEntrenadores from "./RouteEntrenadores.js";
import RouteMembresias from "./RouteMembresias.js";
import RoutePagos from "./RoutePagos.js";
import RouteVentas from "./RouteVentas.js";

const router = Router();

router.use("/productos", RouteProductos);
router.use("/usuarios", RouteUsuarios);
router.use("/entrenadores", RouteEntrenadores);
router.use("/membresias", RouteMembresias);
router.use("/pagos", RoutePagos);
router.use("/ventas", RouteVentas);

export default router;
