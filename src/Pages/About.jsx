import React from 'react';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>Sobre nós</h1>
      <p>Conteúdo sobre a empresa...</p>
      <Link to="/">Voltar para Página Inicial</Link>
      <Link to="/contact">Contato</Link>
    </div>
  );
};

export default About;