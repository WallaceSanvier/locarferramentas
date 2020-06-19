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
      .get("tools", {
        headers: {
          Authorization: userId,
        },
      })
      .then((response) => {
        setTools(response.data);
      });
  }, [userId]);



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
            style={{ background: "green" }}
            to="/profile"
          >
            Ver as minhas Ferramentas
          </Link>
         
        </div>
      </header>

      <h1>Todas as Ferramentas do Condominio</h1>

      <ul>
        {tools.map((tool) => (
          <li key={tool.id}>

            <strong>Dono</strong>
            <p>{tool.name}</p>

            <strong>Whatsapp</strong>
            <p>{tool.whatsapp}</p>

            <strong>FERRAMENTA:</strong>
            <p>{tool.title}</p>

            <strong>Descrição:</strong>
            <p>{tool.description}</p>

            <strong>Valor Da Diária:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(tool.value)}
            </p>

            
          </li>
        ))}
      </ul>
    </div>
    </Container>
    </>
  );
}
