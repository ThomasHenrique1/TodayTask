/* eslint-disable react/prop-types */
import { useState } from "react";

const InputTask = ({ addTask, error }) => {
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTask = () => {
    addTask(newTask, newDescription);
    setNewTask("");
    setNewDescription("");
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Digite sua tarefa..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
      <input
        type="text"
        placeholder="Digite a descrição..."
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        onClick={handleAddTask}
        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Adicionar Tarefa
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default InputTask;
