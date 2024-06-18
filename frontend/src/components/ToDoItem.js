import React, { useState } from 'react';

const ToDoItem = ({ todo, deleteToDo, updateToDo }) => {
    const { id, titulo, descricao, status, dataCriacao } = todo;

    const [currentStatus, setCurrentStatus] = useState(status);

    const handleUpdateStatus = async () => {
        const updatedStatus = currentStatus === 'pendente' 
            ? 'em progresso' 
            : currentStatus === 'em progresso' 
            ? 'concluído' 
            : 'pendente';
        
        const updatedToDo = {
            titulo,
            descricao,
            status: updatedStatus,
            dataCriacao
        };

        await updateToDo(id, updatedToDo);
        setCurrentStatus(updatedStatus);
    };

    return (
        <div>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <p>{currentStatus}</p>
            <p>{dataCriacao}</p>
            <button onClick={() => deleteToDo(id)}>Deletar</button>
            <button onClick={handleUpdateStatus}>Alterar Tarefa</button>
        </div>
    );
};

export default ToDoItem;
