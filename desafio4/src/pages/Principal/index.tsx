import React from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";
import { Link } from "react-router-dom";

function Principal() {
  return (
    <div className="main-Page">
      <PageHeader />
      <div className="container">desafio 4</div>

      <div className="container">
        <Link to="/users" className="usuarios">
          Lista de usuários
        </Link>
      </div>
    </div>
  );
}

export default Principal;
