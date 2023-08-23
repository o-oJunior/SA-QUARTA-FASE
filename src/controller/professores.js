const {
  buscarTodosProfessores,
  deletarProfessor,
  adicionarProfessor,
  editarProfessor
} = require("../model/professores");

exports.buscarTodosProfessores = (req, res) => {
  buscarTodosProfessores((error, results) => {
    if (error) {
      res.status(500).send({ error: "Ocorreu um erro inesperado!" });
    } else {
      res.status(200).send(results.rows);
    }
  });
};

exports.deletarProfessor = (req, res) => {
  const professorId = req.params.id;

  deletarProfessor(professorId, (error, results) => {
    if (error) {
      res.status(500).send({ error: "Ocorreu um erro inesperado!" });
    } else {
      res.status(200).send({ success: "Professor removido com sucesso!" });
    }
  });
};

exports.adicionarProfessor = (req, res) => {
  const professor = req.body;

  adicionarProfessor(professor, (error, results) => {
    if (error) {
      res.status(500).send({ error: "Ocorreu um erro inesperado!" });
    } else {
      res.status(201).send({ success: "Professor adicionado com sucesso!" });
    }
  });
};

exports.editarProfessor = (req, res) => {
  const id = req.params.id;
  const requisicao = req.body;

  editarProfessor(id, requisicao, (error, results) => {
    if(error) {
      res.status(500).send({ error: error });
    } else {
      res.status(200).send({ success: "Professor editado com sucesso!" })
    }
  });
}
