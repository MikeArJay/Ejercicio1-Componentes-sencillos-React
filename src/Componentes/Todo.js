import React, { useState } from "react";


function Todo() {

    const [tasks, setTasks] = useState([
        { texto: 'implementar lista', completada: false },
        { texto: 'hacer click en los checkbox', completada: false },
        { texto: 'comprobar que funciona', completada: false },
        { texto: 'subir a git', completada: false }]);

    const handleCompleteTask = (index) => {
        const auxTodoList = [...tasks];
        auxTodoList[index].completada = !auxTodoList[index].completada;
        setTasks(auxTodoList);
    };

    return (
        <>
            <div className="card">
                <h2>Lista de Tareas</h2>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <input
                                type="checkbox"
                                checket={task.completada}
                                onChange={() => handleCompleteTask(index)}
                            />
                            <span style={{ textDecoration: task.completada ? 'line-through' : 'none' }}>{task.texto}</span>

                        </li>

                    ))}
                </ul>
            </div>
        </>
    )

}
export default Todo