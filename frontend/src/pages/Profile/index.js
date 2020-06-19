import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";


import api from "../../services/api";
import {Container} from "./styled";

export default function Profile() {
  const [tools, setTools] = useState([]);

  const history = useHistory();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    api
      .get("rents", {
        headers: {
          Authorization: userId,
        },
      })
      .then((response) => {
        setTools(response.data);
      });
  }, [userId]);

  async function handleDeleteTool(id) {
    try {
      await api.delete(`tools/${id}`, {
        headers: {
          Authorization: userId,
        },
      });

      setTools(tools.filter((tool) => tool.id !== id));
    } catch (err) {
      alert("Erro ao deletar ferramenta, tente novamente.");
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push("/");
  }

  return (
    <>
    <Container>
      <div className="exit">
      <button className="exit"  onClick={handleLogout} type="exit">
      <Link  to="/">
          Sair
      </Link>
      </button>
      </div>

    <div className="profile-container">
      <header>
     
        <div >
          <Link style={{ background: "yellow" ,color: "black"  }}className="button" to="/tools/new">
            Cadastrar nova ferramenta
          </Link>
          
          <Link
            className="button"
            style={{ background: "blue" }}
            to="/tools/list"
          >
            Ver Ferramentas Disponiveis
          </Link>
         
        </div>
      </header>

      <h1>Minhas Ferramentas</h1>

      <ul>
        {tools.map((tool) => (
          <li key={tool.id}>
            <strong>FERRAMENTA:</strong>
            <p>{tool.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{tool.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(tool.value)}
            </p>

            <button onClick={() => handleDeleteTool(tool.id)} type="button">
             <p>Excluir</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
    </Container>
  </>
  );
 
}
