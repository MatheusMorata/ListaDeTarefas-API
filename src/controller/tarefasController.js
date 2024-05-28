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
                console.log("Nenhuma tarefa encontrada com o ID fornecido.")
            } else {
                console.log("Tarefa atualizada com sucesso")
            }
        } catch (error) {
            console.error("Erro ao atualizar a tarefa", error)
            throw error; 
        }
    }

    async deletar(idTarefa){
        try{
            const funcionario = await Funcionario.destroy({
                where: {
                  id: funcId
                }
            })
        }catch(error){
            throw new Error(error)
        }
    }
}

module.exports = tarefasController