/* eslint-disable react/prop-types */
const TaskDetails = ({ title, description, done, createdAt }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      {description ? (
        <p className="text-gray-400 mt-2">{description}</p>
      ) : (
        <p className="text-gray-500 italic mt-2">Esta tarefa não possui descrição.</p>
      )}
      <div className="mt-4 space-y-2">
        <p className="text-sm text-gray-400">
          <span className="font-semibold">Status:</span>{" "}
          {done ? (
            <span className="text-green-500">Concluída</span>
          ) : (
            <span className="text-yellow-500">Pendente</span>
          )}
        </p>
        <p className="text-sm text-gray-400">
          <span className="font-semibold">Criada em:</span> {createdAt}
        </p>
      </div>
    </>
  );
};

export default TaskDetails;