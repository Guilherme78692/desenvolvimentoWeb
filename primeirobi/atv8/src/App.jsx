import { useState } from "react";
import "./App.css";

function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <form onSubmit={addTask} className="input-area">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => removeTask(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
