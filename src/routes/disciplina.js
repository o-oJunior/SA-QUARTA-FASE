const { Router } = require("express");
const router = Router();
const controller = require("../controller/disciplina");

router.get("/", controller.buscarTodasDisciplinas);
router.post("/adicionar", controller.adicionarDisciplina)
router.delete("/deletar/id/:id", controller.deletarDisciplina);
router.put("/editar/id/:id", controller.editarDisciplina);

module.exports = router;
