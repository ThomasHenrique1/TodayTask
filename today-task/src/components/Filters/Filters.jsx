const Filters = ({ filter, setFilter }) => {
    return (
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-md ${
            filter === "all"
              ? "bg-blue-500 text-white"
              : "bg-blue-100 text-blue-700"
          } hover:bg-blue-200 transition-colors`}
        >
          Todas
        </button>
        <button
          onClick={() => setFilter("done")}
          className={`px-4 py-2 rounded-md ${
            filter === "done"
              ? "bg-green-500 text-white"
              : "bg-green-100 text-green-700"
          } hover:bg-green-200 transition-colors`}
        >
          Concluídas
        </button>
        <button
          onClick={() => setFilter("pending")}
          className={`px-4 py-2 rounded-md ${
            filter === "pending"
              ? "bg-yellow-500 text-white"
              : "bg-yellow-100 text-yellow-700"
          } hover:bg-yellow-200 transition-colors`}
        >
          Pendentes
        </button>
      </div>
    );
  };
  
  export default Filters;