import React, { useEffect, useState } from 'react';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';

const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    const fetchToDos = async () => {
        try {
            const response = await fetch('http://localhost:3001/ler');
            if (!response.ok) {
                throw new Error('Erro ao buscar tarefas');
            }
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
        }
    };

    const addToDo = async (todo) => {
        try {
            await fetch('http://localhost:3001/criar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todo),
            });
            fetchToDos();
        } catch (error) {
            console.error('Erro ao adicionar tarefa:', error);
        }
    };

    const deleteToDo = async (id) => {
        try {
            await fetch(`http://localhost:3001/deletar/${id}`, {
                method: 'DELETE',
            });
            fetchToDos();
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
        }
    };

    const updateToDo = async (id, updatedToDo) => {
        try {
            await fetch(`http://localhost:3001/atualizar/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedToDo),
            });
            fetchToDos();
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
        }
    };

    useEffect(() => {
        fetchToDos();
    }, []);

    return (
        <div>
            <ToDoForm addToDo={addToDo} />
            <div>
                {todos.map((todo) => (
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        deleteToDo={deleteToDo}
                        updateToDo={updateToDo}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToDoList;
