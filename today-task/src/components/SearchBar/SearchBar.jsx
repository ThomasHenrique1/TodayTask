/* eslint-disable react/prop-types */
const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
      <input
        type="text"
        placeholder="Pesquisar tarefas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 mb-4"
      />
    );
  };
  
  export default SearchBar;