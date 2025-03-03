import { useState } from "react";
import InputTask from "./components/InputTask/InputTask";
import TaskList from "./components/TaskList/TaskList";
import Filters from "./components/Filters/Filters";
import SearchBar from "./components/SearchBar/SearchBar";
import useTasks from "./hooks/useTasks";

const App = () => {
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all"); // Filtro: "all", "done", "pending"
  const [searchTerm, setSearchTerm] = useState(""); // Termo de pesquisa

  const { tasks, addTask, deleteTask, toggleTaskDone } = useTasks();

  // Função para adicionar tarefa com tratamento de erros
  const handleAddTask = (newTask, newDescription) => {
    try {
      addTask(newTask, newDescription);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  // Filtrar tarefas com base no filtro selecionado
  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.done;
    if (filter === "pending") return !task.done;
    return true;
  });

  // Filtrar tarefas com base no termo de pesquisa
  const searchedTasks = filteredTasks.filter((task) =>
    task.task.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      {/* Título */}
      <h1 className="text-5xl font-bold mb-8 text-center text-white">TodayTask</h1>

      {/* Container Principal (Lado a Lado) */}
      <div className="w-full max-w-6xl flex gap-8">
        {/* Formulário de Adicionar Tarefa */}
        <div className="w-1/2 p-6 bg-gray-800 rounded-lg shadow-lg">
          <InputTask addTask={handleAddTask} error={error} />
        </div>

        {/* Lista de Tarefas com Filtros e Barra de Pesquisa */}
        <div className="w-1/2 p-6 bg-gray-800 rounded-lg shadow-lg">
          <Filters filter={filter} setFilter={setFilter} />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <TaskList
            tasks={searchedTasks}
            onMarkAsDone={toggleTaskDone}
            onDelete={deleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;