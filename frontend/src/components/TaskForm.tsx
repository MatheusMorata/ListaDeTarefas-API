// src/components/TaskForm.tsx

import React, { useState } from 'react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulando requisição JSONP usando uma tag <script>
    const script = document.createElement('script');
    const endpoint = 'http://localhost:3001/criar';
    const queryParams = `?callback=handleJSONP&titulo=${encodeURIComponent(task.titulo)}&descricao=${encodeURIComponent(task.descricao)}&status=${encodeURIComponent(task.status)}&dataCriacao=${encodeURIComponent(task.dataCriacao)}`;

    script.src = endpoint + queryParams;
    document.body.appendChild(script);

    // Limpa os campos do formulário após submissão
    setTask({
      titulo: '',
      descricao: '',
      status: 'pendente',
      dataCriacao: ''
    });
  };

  // Função de callback para manipular a resposta JSONP
  (window as any).handleJSONP = (response: any) => {
    console.log('Tarefa enviada com sucesso:', response);
    // Aqui você pode adicionar lógica adicional para tratar a resposta, se necessário
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
