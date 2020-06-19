import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

import {Container} from  "./styled";

import logoImg from "../../assets/tools.png";


export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("userId", id);
      localStorage.setItem("userName", response.data.name);
      history.push("/profile");
    } catch (err) {
      alert("Falha no login, tente novamente.");
    }
  }

  return (
      <>
    <Container>

    <div className="Logon-container">
      <section className="form">
        <img  className="img" src={logoImg} alt="tools" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <input className="input"
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      </div>
     

      </Container>
      

      </>
    
  );
}
