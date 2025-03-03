/* eslint-disable react/prop-types */
import { CheckCheck, Trash2, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const TaskItem = ({ task, onMarkAsDone, onDelete }) => {
  return (
    <div className="p-4 border border-gray-700 rounded-lg bg-gray-700 shadow-md hover:shadow-lg transition-shadow animate-fade-in">
      <div className="flex items-center justify-between">
        {/* Nome da Tarefa */}
        <span className="text-lg font-semibold text-white cursor-pointer">
          {task.task}
        </span>

        {/* Botões de Ação */}
        <div className="flex space-x-2">
          <Link
            to={`/task/${task.id}?title=${task.task}&description=${task.description}&done=${task.done}&createdAt=${task.createdAt}`}
            className="p-2 bg-purple-500 text-white rounded-md flex items-center justify-center hover:bg-purple-600 transition-colors"
          >
            <Eye size={20} />
          </Link>
          <button
            onClick={() => onMarkAsDone(task.id)}
            className={`p-2 rounded-md flex items-center justify-center ${
              task.done
                ? "bg-green-500 text-white"
                : "bg-gray-600 text-gray-300"
            } hover:bg-green-600 transition-colors`}
          >
            <CheckCheck size={28} />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 bg-red-500 text-white rounded-md flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            <Trash2 size={28} />
          </button>
        </div>
      </div>

      {/* Indicador de Status */}
      {task.done && (
        <div className="mt-2 text-sm text-green-400">Tarefa concluída</div>
      )}
    </div>
  );
};

export default TaskItem;