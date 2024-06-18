import React, { useState } from 'react';

const ToDoForm = ({ addToDo }) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState('pendente');
    const [dataCriacao, setDataCriacao] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newToDo = { titulo, descricao, status, dataCriacao };
        await addToDo(newToDo);
        setTitulo('');
        setDescricao('');
        setStatus('pendente');
        setDataCriacao('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Título"
                required
            />
            <input
                type="text"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descrição"
                required
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="pendente">Pendente</option>
                <option value="em progresso">Em Progresso</option>
                <option value="concluído">Concluído</option>
            </select>
            <input
                type="date"
                value={dataCriacao}
                onChange={(e) => setDataCriacao(e.target.value)}
                required
            />
            <button type="submit">Adicionar Tarefa</button>
        </form>
    );
};

export default ToDoForm;
