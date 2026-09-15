import { Router } from "express";
import { ControllerUsuarios } from "../controllers/ControllerUsuarios.js";

const router = Router();

router.get("/", ControllerUsuarios.obtenerTodos);
router.get("/:id", ControllerUsuarios.obtenerUno);
router.post("/", ControllerUsuarios.crear);
router.put("/:id", ControllerUsuarios.actualizar);
router.delete("/:id", ControllerUsuarios.eliminar);

export default router;
