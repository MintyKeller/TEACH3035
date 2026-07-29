import { useContext } from 'react';
import TaskContext from '../contexts/TaskContext';

export function ShowList() {
    const { tarefas, excluirTarefa, concluirTarefa} = useContext(TaskContext);
    //console.log("O ShowList recebeu:", tarefas);
    return (
        <ul>
            {tarefas.map((tarefa: any) => (
                <li key={tarefa.id} >
                    <input type="checkbox" checked={tarefa.concluida} onChange={() => concluirTarefa(tarefa.id)}/>
                    <p
                    style={{ //estilo pra quando ela for conlcuida, 
                    textDecoration: tarefa.concluida ? 'line-through' : 'none', 
                    color: tarefa.concluida ? 'green' : 'black' 
                }}>
                    {tarefa.texto}</p>
                    <button onClick={() => excluirTarefa(tarefa.id)}> Excluir</button>

                </li>
            ))}
        </ul>
    )
}