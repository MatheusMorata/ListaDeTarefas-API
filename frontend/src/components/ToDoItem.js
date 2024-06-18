import React from 'react';

const ToDoItem = ({ todo, deleteToDo, updateToDo }) => {
    const { id, titulo, descricao, status, dataCriacao } = todo;

    return (
        <div>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <p>{status}</p>
            <p>{dataCriacao}</p>
            <button onClick={() => deleteToDo(id)}>Deletar</button>
            <button onClick={() => {
                const updatedToDo = {
                    ...todo,
                    status: status === 'pendente' ? 'em progresso' : status === 'em progresso' ? 'concluído' : 'pendente'
                };
                updateToDo(id, updatedToDo);
            }}>Alterar Status</button>
        </div>
    );
};

export default ToDoItem;
