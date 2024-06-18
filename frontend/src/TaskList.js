import React, { useState } from 'react';
import './styles.css';

const TaskList = ({ tasks, onDeleteTask, onUpdateTask }) => {
  const [editMode, setEditMode] = useState(null); 
  const [editedTask, setEditedTask] = useState({
    id: null,
    titulo: '',
    descricao: '',
    status: 'pendente',
    dataCriacao: ''
  });

  const handleEditClick = (task) => {
    setEditedTask({
      id: task.id,
      titulo: task.titulo,
      descricao: task.descricao,
      status: task.status,
      dataCriacao: task.dataCriacao
    });
    setEditMode(task.id);
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setEditedTask({
      id: null,
      titulo: '',
      descricao: '',
      status: 'pendente',
      dataCriacao: ''
    });
  };

  const handleUpdateTask = async () => {
    try {
      const response = await fetch(`http://localhost:3001/alterar/${editedTask.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedTask),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar tarefa. Status: ' + response.status);
      }

      // Atualizar a lista de tarefas após a atualização
      onUpdateTask(editedTask.id, editedTask);
      setEditMode(null);
      setEditedTask({
        id: null,
        titulo: '',
        descricao: '',
        status: 'pendente',
        dataCriacao: ''
      });

    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
      alert('Erro ao atualizar tarefa. Por favor, tente novamente.');
    }
  };

  const handleDeleteClick = (taskId) => {
    onDeleteTask(taskId);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value
    });
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      {tasks.map(task => (
        <div className="task-item" key={task.id}>
          {editMode === task.id ? (
            <div className="edit-form">
              <input type="text" name="titulo" value={editedTask.titulo} onChange={handleChange} />
              <input type="text" name="descricao" value={editedTask.descricao} onChange={handleChange} />
              <select name="status" value={editedTask.status} onChange={handleChange}>
                <option value="pendente">Pendente</option>
                <option value="em progresso">Em Progresso</option>
                <option value="concluído">Concluído</option>
              </select>
              <input type="date" name="dataCriacao" value={editedTask.dataCriacao} onChange={handleChange} />
              <div className="actions">
                <button className="save" onClick={handleUpdateTask}>Salvar</button>
                <button className="cancel" onClick={handleCancelEdit}>Cancelar</button>
              </div>
            </div>
          ) : (
            <div>
              <header>
                <h2>{task.titulo}</h2>
                <div className="actions">
                  <button className="edit" onClick={() => handleEditClick(task)}>Editar</button>
                  <button className="delete" onClick={() => handleDeleteClick(task.id)}>Excluir</button>
                </div>
              </header>
              <div className="task-details">
                <p>{task.descricao}</p>
                <p>Status: {task.status}</p>
                <p>Data de Criação: {task.dataCriacao}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
