import axios from "axios";
import { useState } from "react";
import './Remover.css';

const API_URL = "http://localhost:3001/filmes";

function Remover() {
  const deleteFilme = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then((res) => console.log(res))
      .catch((erro) => console.log(erro));
  };

  const [id, setId] = useState("");
  return (
    <form>
      <label htmlFor="id">Digite o ID do filme que deseja deletar:</label>
      
      <input
        type="text"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          deleteFilme(id);
        }}
      >
        Deletar
      </button>
    </form>
  );
}

export default Remover;
