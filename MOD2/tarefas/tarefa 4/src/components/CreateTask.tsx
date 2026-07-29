
import React, { useState, useContext } from 'react';
import TaskContext from '../contexts/TaskContext';


export function CreateTask() {
   
  const [texto, setTexto] = useState('');
    //puxando a função do app.tsx
  const { adicionarTarefa } = useContext(TaskContext);

  function AoClicar() {
   //se nao estiver vazio ele adiciona
    if (texto !== "") {
      adicionarTarefa(texto); //vai para o app.tsx
      setTexto(''); //limpa
    } else {
        alert("Você inseriu uma tarefa vazia!");
    }
  }


    return (
            <div>
      <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} />
      
      {/* MISSÃO B: Coloque o evento de clique (onClick) neste botão chamando a função lidarComClique */}
      <button onClick={AoClicar}>Adicionar </button>
    </div>
    )
}