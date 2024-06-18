import React, { useState } from 'react';

const TaskForm = ({ onTaskSubmit, loading }) => {
  const [taskData, setTaskData] = useState({
    titulo: '',
    descricao: '',
    status: 'pendente',
    dataCriacao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskSubmit(taskData); 
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input type="text" name="titulo" value={taskData.titulo} onChange={handleChange} placeholder="Título" required />
      <input type="text" name="descricao" value={taskData.descricao} onChange={handleChange} placeholder="Descrição" required />
      <select name="status" value={taskData.status} onChange={handleChange}>
        <option value="pendente">Pendente</option>
        <option value="em progresso">Em Progresso</option>
        <option value="concluído">Concluído</option>
      </select>
      <input type="date" name="dataCriacao" value={taskData.dataCriacao} onChange={handleChange} required />
      <button type="submit" disabled={loading}>{loading ? 'Enviando...' : 'Criar Tarefa'}</button>
    </form>
  );
};

export default TaskForm;
