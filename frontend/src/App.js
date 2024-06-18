// App.js
import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3001/ler');
      if (!response.ok) {
        throw new Error('Erro ao carregar tarefas.');
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
      alert('Erro ao carregar tarefas. Por favor, tente novamente.');
    }
  };

  const handleTaskSubmit = async (newTask) => {
    try {
      const response = await fetch('http://localhost:3001/criar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar tarefa. Status: ' + response.status);
      }

      // Atualizar a lista de tarefas após a criação
      fetchTasks();

    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
      alert('Erro ao criar tarefa. Por favor, tente novamente.');
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:3001/deletar/${taskId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao deletar tarefa. Status: ' + response.status);
      }

      // Atualizar a lista de tarefas após a exclusão
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);

    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
      alert('Erro ao deletar tarefa. Por favor, tente novamente.');
    }
  };

  const handleUpdateTask = async (taskId, updatedTaskData) => {
    try {
      const response = await fetch(`http://localhost:3001/alterar/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTaskData),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar tarefa. Status: ' + response.status);
      }

      // Atualizar a lista de tarefas após a atualização
      const updatedTasks = tasks.map(task =>
        task.id === taskId ? { ...task, ...updatedTaskData } : task
      );
      setTasks(updatedTasks);

    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
      alert('Erro ao atualizar tarefa. Por favor, tente novamente.');
    }
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <TaskForm onTaskSubmit={handleTaskSubmit} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onUpdateTask={handleUpdateTask} />
    </div>
  );
}

export default App;
