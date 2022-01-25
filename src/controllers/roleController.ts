import express from "express";
import { ListarRoles } from "../services/listarRoles";

const router = express.Router();

router.get("/listar-roles", async (req, res) => {
  const listarRoles = new ListarRoles();
  res.send(await listarRoles.execute());
});

export default router;
