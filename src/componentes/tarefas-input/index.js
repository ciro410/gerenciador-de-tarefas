import { useState } from 'react';
import './style.css'
import deleteButton from '../../assets/delete.svg';
import { Tarefas } from '../tarefas';

export function Tarefasinput({tarefas,setTarefas}) {
  const [texto, mudarTexto] = useState("");
  
  function handleKeyDown(event) {
    if (event.key !== 'Enter') return

    const novaTarefa = [...tarefas, { id: Math.random(), texto: event.target.value, completa: false }];

    setTarefas(novaTarefa);
    event.target.value = '';
  }

  return (
    <div className="tarefas-input">
      <h1>tarefas</h1>
      <input
        type="text"
        className="tarefas-input"
        placeholder='Criar uma nova tarefa'
        onKeyDown={handleKeyDown}
      />
    </div>
    
  )
}