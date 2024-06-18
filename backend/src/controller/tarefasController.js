const model = require('../model/tarefasModel')

class tarefasController{

    // Função para criar uma tarefa no banco de dados
    async criar(tarefa) {
        try {
            if (tarefa.status !== 'pendente' && tarefa.status !== 'em progresso' && tarefa.status !== 'concluído') {
                throw new Error('Status inválido');
            } else {
                await model.create(tarefa);
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    // Função para receber as tarefas do banco de dados
    async ler(){
        try{
            const tarefas = await model.findAll()
            return tarefas
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
                throw new Error("Nenhuma tarefa encontrada com o ID fornecido.");
            } 
        } catch (error) {
            throw new Error(error); 
        }
    }

    // Função para deletar uma tarefa no banco de dados
    async deletar(idTarefa){
        try {
            const linhas = await model.destroy({
                where: {
                    id: idTarefa
                }
            });
    
            if (linhas === 0) {
                throw new Error("O ID da tarefa fornecido não existe no banco de dados.");
            }
        } catch(error) {
            throw new Error(error);
        }
    }
}

module.exports = tarefasController