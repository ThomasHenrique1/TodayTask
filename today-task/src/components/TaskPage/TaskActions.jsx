/* eslint-disable react/prop-types */
import { CheckCheck, Edit, Trash2 } from "lucide-react";

const TaskActions = ({
  isEditing,
  onSave,
  onEdit,
  onDelete,
  onToggleDone,
  done,
}) => {
  return (
    <div className="mt-6 flex space-x-4">
      {isEditing ? (
        <button
          onClick={onSave}
          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          Salvar
        </button>
      ) : (
        <button
          onClick={onEdit}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          <Edit size={20} className="mr-2" />
          Editar
        </button>
      )}
      <button
        onClick={onDelete}
        className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        <Trash2 size={20} className="mr-2" />
        Excluir
      </button>
      <button
        onClick={onToggleDone}
        className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
      >
        <CheckCheck size={20} className="mr-2" />
        {done ? "Marcar como Pendente" : "Marcar como Concluída"}
      </button>
    </div>
  );
};

export default TaskActions;