import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    // Carregar tarefas do localStorage ao iniciar
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return savedTasks;
  });

  // Salvar tarefas no localStorage sempre que houver alteração
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Adicionar uma nova tarefa
  const addTask = (newTask, newDescription) => {
    if (tasks.length >= 50) {
      throw new Error("Você atingiu o limite de tarefas. Por favor, apague algumas para continuar.");
    }

    if (!newTask.trim() || !newDescription.trim()) {
      throw new Error("Por favor, preencha todos os campos antes de adicionar uma tarefa.");
    }

    const newTaskObj = {
      id: uuidv4(),
      task: newTask,
      description: newDescription,
      done: false,
      createdAt: new Date().toLocaleString(),
    };

    setTasks((prevTasks) => [...prevTasks, newTaskObj]);
  };

  // Deletar uma tarefa
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Marcar/desmarcar tarefa como concluída
  const toggleTaskDone = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  // Editar uma tarefa
  const editTask = (id, updatedTask, updatedDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, task: updatedTask, description: updatedDescription }
          : task
      )
    );
  };

  return { tasks, addTask, deleteTask, toggleTaskDone, editTask };
};

export default useTasks;
