import React from 'react';
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contato</h1>
      <p>Informações de contato...</p>
      <Link to="/">Voltar para Página Inicial</Link>
      
      <Link to="/about">Sobre nós</Link>
    </div>
  );

};

export default Contact;
