import {
  obtenerProyectos,
  nuevoProyecto,
  obtenerProyecto,
  editarProyecto,
  eliminarProyecto,
  agregarColaborador,
  eliminarColaborador,
  buscarColaborador
} from "../controllers/proyectoController.js";
import express from "express";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router
  .route("/")
  .get(checkAuth, obtenerProyectos)
  .post(checkAuth, nuevoProyecto);
router
  .route("/:id")
  .get(checkAuth, obtenerProyecto)
  .put(checkAuth, editarProyecto)
  .delete(checkAuth, eliminarProyecto);
router.post("/agregar-colaborador/:id", checkAuth, agregarColaborador);
router.get("/buscar-colaborador/:email", checkAuth, buscarColaborador);
router.post("/eliminar-colaborador/:id", checkAuth, eliminarColaborador);

export default router;
