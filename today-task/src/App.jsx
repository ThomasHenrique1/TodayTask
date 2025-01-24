import { useState, useEffect } from "react";
import InputTask from "./components/InputTask";
import TaskList from "./components/TaskList";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  // Carregar tarefas do localStorage quando o componente for montado
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Salvar tarefas no localStorage sempre que o estado de tasks mudar
  useEffect(() => {
    if (tasks.length) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (newTask, newDescription) => {
    if (tasks.length >= 50) {
      setError("Você atingiu o limite de tarefas. Por favor, apague algumas para continuar.");
      return;
    }

    if (!newTask.trim() || !newDescription.trim()) {
      setError("Por favor, preencha todos os campos antes de adicionar uma tarefa.");
      return;
    }

    const newTaskObj = {
      id: uuidv4(),
      task: newTask,
      description: newDescription,
      done: false,
      isDescriptionVisible: false,
    };

    setTasks([...tasks, newTaskObj]);
    setError("");
  };

  // Modificar a função handleDelete para atualizar o localStorage
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);

    // Atualizar o localStorage depois de deletar a tarefa
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleMarkAsDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);

    // Atualizar o localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleToggleDescription = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index
        ? { ...task, isDescriptionVisible: !task.isDescriptionVisible }
        : task
    );
    setTasks(updatedTasks);

    // Atualizar o localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-500 p-6">
      <h1 className="text-5xl font-bold mb-8 text-center text-white">TodayTask</h1>

      <div className="w-full max-w-3xl mb-8 p-6 bg-white rounded-md shadow-md">
        <InputTask addTask={addTask} error={error} />
      </div>

      <div className="w-full max-w-3xl p-6 bg-white rounded-md shadow-md">
        <TaskList
          tasks={tasks}
          onMarkAsDone={handleMarkAsDone}
          onDelete={handleDelete}
          onToggleDescription={handleToggleDescription}
        />
      </div>
    </div>
  );
};

export default App;
