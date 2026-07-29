import { useState } from "react";

import './App.css';
import TaskContext from './contexts/TaskContext';
import { CreateTask } from './components/CreateTask';
import { ShowList } from './components/ShowList';

function App() {
const [tarefas, setTarefas] = useState<any[]>([]);

  
  function adicionarTarefa(textoDaTarefa:String) {

    // criando o id:
    let novoId = 1;  // se for zero, o id eh igual a 1
    
    if (tarefas.length > 0) {
      //ultimo id
      const ultimaTarefa = tarefas[tarefas.length - 1];
      //adiciona um ao ultimo id
      novoId = ultimaTarefa.id + 1;
    }

   const novaTarefa = {
      id: novoId,
      texto: textoDaTarefa,
      concluida: false 
    };         //os tres pontinhos copiam tudo o que ja tinha
    setTarefas([...tarefas, novaTarefa]);
  
}

  function excluirTarefa(idDaTarefa:number) {
   
    const listaAtualizada = tarefas.filter((tarefa) => tarefa.id !== idDaTarefa);
    setTarefas(listaAtualizada);
   
  }

  function concluirTarefa(idDaTarefa:Number) {
    const listaAtualizada = tarefas.map((tarefa) => {
      if (tarefa.id === idDaTarefa) {
    
        return { ...tarefa, concluida: !tarefa.concluida };//muda o stts da tarefa com o mesmo id
      }
      return tarefa; 
    });
    setTarefas(listaAtualizada);
    
  }
  return (
                                      //enviando as funções e a lista de tarefas, por um obj js
  <TaskContext.Provider value={{ tarefas, adicionarTarefa, excluirTarefa, concluirTarefa }}>
      <div className="App">
        <h1>Minha Lista de Tarefas</h1>
       <CreateTask/>
       <ShowList/>
      </div>
    </TaskContext.Provider>
  );
}



export default App;



