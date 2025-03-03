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
        className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Digite a descrição..."
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
      />
      <button
        onClick={handleAddTask}
        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Adicionar Tarefa
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputTask;