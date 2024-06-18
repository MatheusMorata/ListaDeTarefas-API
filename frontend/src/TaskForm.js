import React, { useState } from 'react';

const TaskForm = ({ onTaskSubmit }) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('pendente');
  const [dataCriacao, setDataCriacao] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verificar se todos os campos estão preenchidos
    if (!titulo || !descricao || !dataCriacao) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const taskData = {
      titulo,
      descricao,
      status,
      dataCriacao
    };

    try {
      // Enviar para a requisição HTTP POST
      const response = await fetch('http://localhost:3001/criar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });
      
      if (!response.ok) {
        throw new Error('Erro ao criar tarefa.');
      }

      // Limpar os campos após o envio bem-sucedido
      setTitulo('');
      setDescricao('');
      setStatus('pendente');
      setDataCriacao('');

      // Atualizar a lista de tarefas chamando a função passada por prop
      onTaskSubmit(taskData);

    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
      alert('Erro ao criar tarefa. Por favor, tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </div>
      <div>
        <label>Descrição:</label>
        <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pendente">Pendente</option>
          <option value="em progresso">Em Progresso</option>
          <option value="concluído">Concluído</option>
        </select>
      </div>
      <div>
        <label>Data de Criação:</label>
        <input type="date" value={dataCriacao} onChange={(e) => setDataCriacao(e.target.value)} />
      </div>
      <button type="submit">Criar Tarefa</button>
    </form>
  );
};

export default TaskForm;
