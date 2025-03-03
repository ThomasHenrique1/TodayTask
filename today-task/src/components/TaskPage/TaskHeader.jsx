/* eslint-disable react/prop-types */
import { ChevronLeftIcon } from "lucide-react";

const TaskHeader = ({ onBack }) => {
  return (
    <div className="flex justify-center relative mb-6">
      <button
        onClick={onBack}
        className="absolute left-0 top-0 bottom-0 text-white hover:text-blue-500 transition-colors"
      >
        <ChevronLeftIcon size={32} />
      </button>
      <h1 className="text-3xl text-white font-bold text-center">Detalhes da Tarefa</h1>
    </div>
  );
};

export default TaskHeader;