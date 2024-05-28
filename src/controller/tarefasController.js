const model = require('../model/tarefasModel')

class tarefasController{

    async cadastrar(tarefa){
        try{
            await model.create(tarefa)
        }catch(error){
            throw new Error(error)
        }
    }

    async visualizar(){
        try{
            const visualizar = await model.findAll()
            return visualizar
        }catch(error){
            throw new Error(error)
        }
    }

    async alterar(idTarefa, novaTarefa){
        try {
            const [linhas,[tarefaAtualizada]] = await model.update(novaTarefa, {
                where: {
                    id: idTarefa
                },
                returning: true 
            });
            if (linhas === 0) {
                throw new Error("Nenhuma tarefa encontrada com o ID fornecido.")
            } 
        } catch (error) {
            throw new Error(error); 
        }
    }

    async deletar(idTarefa){
        try{
            await model.destroy({
                where: {
                  id: idTarefa
                }
            })
        }catch(error){
            throw new Error(error)
        }
    }
}

module.exports = tarefasController