/* eslint-disable react/prop-types */

import { CheckCheck, Trash2 } from "lucide-react";

const TaskItem = ({ task, index, onToggleDescription, onMarkAsDone, onDelete, isDescriptionVisible }) => {
  return (
    <div className="p-4 border rounded-md shadow-md bg-white">
      <div className="flex items-center justify-between">
        {/* Nome ou Descrição da Tarefa */}
        <span
          className="text-lg font-semibold cursor-pointer"
          onClick={() => onToggleDescription(index)} // Toggle para exibir descrição ou nome
        >
          {isDescriptionVisible ? task.description : task.task} {/* Exibe a descrição ou nome da tarefa */}
        </span>

        {/* Botões com Ícones */}
        <div className="flex space-x-2">
          <button
            onClick={() => onMarkAsDone(index)}
            className={`p-2 rounded-md flex items-center justify-center ${
              task.done
                ? "bg-gray-400 text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-green-300`}
          >
            <CheckCheck size={28} />
          </button>
          <button
            onClick={() => onDelete(index)}
            className="p-2 bg-gray-200 text-gray-800 rounded-md flex items-center justify-center hover:bg-red-400 hover:text-white"
          >
            <Trash2 size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
