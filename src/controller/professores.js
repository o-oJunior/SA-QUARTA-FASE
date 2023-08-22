const { buscarTodosProfessores } = require('../model/professores');
const professoresModel = new ProfessoresModel()

exports.buscarTodosProfessores = (req,res) => {
    buscarTodosProfessores((error, results) => {
        if(error){
            res.status(500).send({error: 'Ocorreu um erro inesperado!'})
        } else {
            res.status(200).send(results.rows)
        }
    });
}