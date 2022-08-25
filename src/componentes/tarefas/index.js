import { useState } from 'react';
import './style.css'
import deleteButton from '../../assets/delete.svg';

export function Tarefas({ tarefa, mudarTarefa, removerTarefa }) {

  return (
    <div className="tarefas">
      <span
        onClick={() => mudarTarefa({ ...tarefa, completa: !tarefa.completa })}
        style={{ textDecoration: tarefa.completa === true ? 'line-through' : '' }}
      >
        {tarefa.texto}
      </span>
      <img
        src={deleteButton}
        onClick={() => removerTarefa(tarefa)}
        alt="" />
    </div>
  )
}