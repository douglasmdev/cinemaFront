import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="cabecalho">
      <nav>
        <ul>adicionar filme</ul>
        <ul>remover filme</ul>
        <ul>atualizar filme</ul>
      </nav>
    </header>
  );
}

export default Header;