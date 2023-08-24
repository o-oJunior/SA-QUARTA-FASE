const {
  buscarTodosProfessores,
  deletarProfessor,
  adicionarProfessor,
  editarProfessor
} = require("../model/professor");

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
  const professor = req.body;

  editarProfessor(id, professor, (error, results) => {
    if(error) {
      res.status(500).send({ error: "Ocorreu um erro inesperado!" });
    } else {
      res.status(200).send({ success: "Professor editado com sucesso!" })
    }
  });
}