import { Router } from "express";
import { ControllerMembresias } from "../controllers/ControllerMembresias.js";

const router = Router();

router.get("/", ControllerMembresias.obtenerTodos);
router.get("/:id", ControllerMembresias.obtenerUno);
router.post("/", ControllerMembresias.crear);
router.put("/:id", ControllerMembresias.actualizar);
router.delete("/:id", ControllerMembresias.eliminar);

export default router;
