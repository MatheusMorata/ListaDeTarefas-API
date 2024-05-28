const model = require('../model/tarefasModel')

class tarefasController{

    // Função para cadastrar uma tarefa no banco de dados
    async cadastrar(tarefa){
        try{
            await model.create(tarefa)
        }catch(error){
            throw new Error(error)
        }
    }

    // Função para receber as tarefas do banco de dados
    async visualizar(){
        try{
            const visualizar = await model.findAll()
            return visualizar
        }catch(error){
            throw new Error(error)
        }
    }

    // Função para alterar uma tarefa no banco de dados
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

    // Função para deletar uma tarefa no banco de dados
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