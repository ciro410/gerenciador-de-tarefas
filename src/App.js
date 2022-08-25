import './index.css';
import { useState } from 'react';
import { Tarefasinput } from './componentes/tarefas-input';
import { Tarefas } from './componentes/tarefas';
import { BotoesFiltro} from './componentes/tarefas-menu';


function App() {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState('todos');

  const tarefasFiltradas = tarefas.filter((t) =>
    filtro === "feitas" ? t.completa : filtro === "a-fazer" ? !t.completa: true
  );

  const tarefasNaoCompletadas = tarefas.filter((t) => !t.completa);

  function mudarTarefa(tarefaEditada) {
    setTarefas(tarefas.map((t) => (t.id !== tarefaEditada.id ? t : tarefaEditada)));
  }

  function removerTarefa(tarefaARemover) {
    setTarefas(tarefas.filter(t=> t.id !== tarefaARemover.id));
  }

  return (
    <div className="App">
      <Tarefasinput
        tarefas={tarefas}
        setTarefas = {setTarefas}
      />
      {tarefasFiltradas.map((tarefa, i) => (
        <Tarefas
          tarefa={tarefa}
          mudarTarefa={mudarTarefa}
          removerTarefa={removerTarefa}
        />
      ))
      }
      <div className="tarefas-menu">
      <button>{tarefasNaoCompletadas.length} itens restantes</button>
      <div className="tarefas-status">
        <BotoesFiltro
        filtro={filtro}
        setFiltro={setFiltro}
        valor="todos"
        >
          Todas
        </BotoesFiltro>
        <BotoesFiltro
        filtro={filtro}
        setFiltro={setFiltro}
        valor="a-fazer"
        >
          A fazer
        </BotoesFiltro>
        <BotoesFiltro
        filtro={filtro}
        setFiltro={setFiltro}
        valor="feitas"
        >
          Completas
        </BotoesFiltro>
        <button
                id="botao-limpar"
                onClick={() => {
                    setTarefas(tarefasNaoCompletadas);
                }}
              >
                  Limpar completadas
              </button>
      </div>
      </div>
    </div>
  );
}

export default App;
