import { Router } from "express";
import { ControllerPagos } from "../controllers/ControllerPagos.js";

const router = Router();

router.get("/", ControllerPagos.obtenerTodos);
router.get("/:id", ControllerPagos.obtenerUno);
router.post("/", ControllerPagos.crear);
router.put("/:id", ControllerPagos.actualizar);
router.delete("/:id", ControllerPagos.eliminar);

export default router;
