import { Router } from "express";
import { ControllerVentas } from "../controllers/ControllerVentas.js";

const router = Router();

router.get("/", ControllerVentas.obtenerTodos);
router.get("/:id", ControllerVentas.obtenerUno);
router.post("/", ControllerVentas.crear);
router.put("/:id", ControllerVentas.actualizar);
router.delete("/:id", ControllerVentas.eliminar);

export default router;
