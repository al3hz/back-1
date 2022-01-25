import express from "express";
import { Login } from "../services/login";
import { ListarUsuarios } from "../services/listarUsuarios";

const router = express.Router();

router.post("/", async (req, res) => {
  const login = new Login();
  const resultado = await login.buscarUsuario({
    username: req.body.username,
    password: req.body.password,
  });

  if (resultado) {
    res.json(resultado);
  } else {
    res.sendStatus(400);
  }
});

router.get("/listar-usuarios", async (req, res) => {
  const listarUsuarios = new ListarUsuarios();
  res.send(await listarUsuarios.execute());
});

export default router;
