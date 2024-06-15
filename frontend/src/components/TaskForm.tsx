import React, { useState } from 'react';
import axios from 'axios';

interface Task {
  titulo: string;
  descricao: string;
  status: 'pendente' | 'em progresso' | 'concluída';
  dataCriacao: string;
}

const TaskForm: React.FC = () => {
  const [task, setTask] = useState<Task>({
    titulo: '',
    descricao: '',
    status: 'pendente',
    dataCriacao: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTask(prevTask => ({
      ...prevTask,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:3000/criar', task);

      console.log('Tarefa enviada com sucesso:', task);
      setTask({
        titulo: '',
        descricao: '',
        status: 'pendente',
        dataCriacao: ''
      });
    } catch (error) {
      console.error('Erro ao enviar tarefa:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titulo">Título:</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          value={task.titulo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="descricao">Descrição:</label>
        <textarea
          id="descricao"
          name="descricao"
          value={task.descricao}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={task.status}
          onChange={handleChange}
          required
        >
          <option value="pendente">Pendente</option>
          <option value="em progresso">Em Progresso</option>
          <option value="concluída">Concluída</option>
        </select>
      </div>
      <div>
        <label htmlFor="dataCriacao">Data de Criação:</label>
        <input
          type="date"
          id="dataCriacao"
          name="dataCriacao"
          value={task.dataCriacao}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default TaskForm;
