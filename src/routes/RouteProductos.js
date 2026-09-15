import { Router } from "express";
import { ControllerProductos } from "../controllers/ControllerProductos.js";

const router = Router();

router.get("/", ControllerProductos.obtenerTodos);
router.get("/:id", ControllerProductos.obtenerUno);
router.post("/", ControllerProductos.crear);
router.put("/:id", ControllerProductos.actualizar);
router.delete("/:id", ControllerProductos.eliminar);

export default router;
