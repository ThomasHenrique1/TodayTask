/* eslint-disable react/prop-types */
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import TaskHeader from "../components/TaskPage/TaskHeader";
import TaskDetails from "../components/TaskPage/TaskDetails";
import TaskEditForm from "../components/TaskPage/TaskEditForm";


const TaskPage = ({ editTask }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const taskId = searchParams.get("id");
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const done = searchParams.get("done") === "true";
  const createdAt = searchParams.get("createdAt");

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  // Função para salvar as alterações
  const handleSave = () => {
    if (!editedTitle.trim() || !editedDescription.trim()) {
      alert("Por favor, preencha todos os campos antes de salvar.");
      return;
    }

    // Log para depuração
    console.log("Salvando Tarefa:");
    console.log("taskId:", taskId);
    console.log("editedTitle:", editedTitle);
    console.log("editedDescription:", editedDescription);

    // Chama a função editTask para atualizar a tarefa no estado global
    editTask(taskId, editedTitle, editedDescription);
    setIsEditing(false);
    navigate("/"); // Redireciona para a home após salvar
  };

  // Validação dos parâmetros
  if (!title) {
    return (
      <div className="h-screen w-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex items-center justify-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold text-white">Tarefa não encontrada</h2>
          <p className="text-gray-400 mt-2">
            A tarefa que você está tentando acessar não existe ou foi removida.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="w-full max-w-[500px] mx-auto space-y-4 animate-fade-in">
        {/* Cabeçalho */}
        <TaskHeader onBack={() => navigate(-1)} />

        {/* Card de Detalhes da Tarefa */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          {isEditing ? (
            <>
              <TaskEditForm
                editedTitle={editedTitle}
                setEditedTitle={setEditedTitle}
                editedDescription={editedDescription}
                setEditedDescription={setEditedDescription}
              />
              <button
                onClick={handleSave}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors w-full"
              >
                Salvar
              </button>
            </>
          ) : (
            <>
              <TaskDetails
                title={title}
                description={description}
                done={done}
                createdAt={createdAt}
              />
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors w-full"
              >
                Editar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
