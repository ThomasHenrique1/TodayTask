/* eslint-disable react/prop-types */
const TaskEditForm = ({ editedTitle, setEditedTitle, editedDescription, setEditedDescription }) => {
  return (
    <>
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500 mb-4"
        placeholder="Nome da Tarefa"
      />
      <textarea
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
        className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
        rows="4"
        placeholder="Descrição da Tarefa"
      />
    </>
  );
};

export default TaskEditForm;