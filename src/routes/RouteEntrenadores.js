import { Router } from "express";
import { ControllerEntrenadores } from "../controllers/ControllerEntrenadores.js";

const router = Router();

router.get("/", ControllerEntrenadores.obtenerTodos);
router.get("/:id", ControllerEntrenadores.obtenerUno);
router.post("/", ControllerEntrenadores.crear);
router.put("/:id", ControllerEntrenadores.actualizar);
router.delete("/:id", ControllerEntrenadores.eliminar);

export default router;
