/* eslint-disable react/prop-types */
import { Trash2, CheckCheck } from "lucide-react";
import { Link } from "react-router-dom";

const TaskList = ({ tasks, onMarkAsDone, onDelete }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`p-4 border rounded-md shadow-md ${
            task.done ? "bg-green-100" : "bg-slate-50"
          }`}
        >
          <div className="flex justify-between items-center">
            <div className="text-slate-700">
              <h3 className="text-lg font-bold">{task.task}</h3>
              
            </div>
            <div className="flex space-x-4">
              <Link
                to={`/task?title=${task.task}&description=${task.description}`}
                className="text-blue-500 hover:underline"
              >
                Ver Detalhes
              </Link>
              <button
                onClick={() => onMarkAsDone(task.id)}
                className="hover:text-green-300"
              >
                <CheckCheck size={28} />
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="hover:text-red-400"
              >
                <Trash2 size={28} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
