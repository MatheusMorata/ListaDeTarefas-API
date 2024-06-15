import React from 'react';
import TaskForm from './components/TaskForm';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gerenciador de Tarefas</h1>
      </header>
      <main>
        <TaskForm />
      </main>
    </div>
  );
};

export default App;
