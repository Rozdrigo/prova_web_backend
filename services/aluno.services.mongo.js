const AlunoModel = require("../models/aluno.models.mongo")

class AlunoService {
    static list(request, response) {
        AlunoModel.find()
        .then(
            (alunos) => {
                response.status(201).json(alunos)     
            }
        )
    }

    static register(request,response) {
        AlunoModel.create(request.body)
        .then(
            (aluno) => {
                response.status(201).json(aluno)
            }
        )
    }

    static media(resquest, response){
        AlunoModel.find()
        .then(
            (alunos) => {
                let aux = 0;
                alunos.map(a => {
                    aux += a.ira;
                })
                aux = aux/alunos.length
                response.status(201).json(aux)     
            }
        )
    }

    static aprovados(request, response){
        AlunoModel.find()
        .then(
            (alunos) => {
                let aux = 0;
                alunos.map(a => {
                    aux += a.ira;
                })
                aux = aux/alunos.length
                response.status(201).json(alunos.filter(x => x.ira > aux))     
            }
        )
    }

    static retrieve(request,response) {
        AlunoModel.findById(request.params.id)
        .then(
            (aluno) => {
                response.status(201).json(aluno)
            }
        )
    }

    static update(request,response) {
        AlunoModel.findByIdAndUpdate(
                    request.params.id,
                    request.body,
                    {new:true})
        .then(
            (aluno) => {
                response.status(201).json(aluno)
            }
        )
    }

    static delete(request,response) {
        AlunoModel.findByIdAndRemove(request.params.id)
        .then(
            (aluno) => {
                response.status(201).json(aluno)
            }
        )
    }
}
module.exports = AlunoService