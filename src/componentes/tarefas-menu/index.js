import { useState } from 'react';
import './style.css'

export function BotoesFiltro({ filtro, setFiltro, valor, children }) {
  return (
  <button
    onClick={() => setFiltro(valor)}
    className={filtro === valor ? "ativo" : ""}
  >
    {children}
  </button>
  )
}
