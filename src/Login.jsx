import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";  
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Cadastro = () => {
  return (
    <div>
      <Navbar />
      <div className="cadastro-section">
        <h2>Entrar na sua Conta</h2>
        <p>Preencha seus dados</p>
        <form className="cadastro-form">
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Senha" required />
          </div>
          <Link to="/NovoCadastro">     <button type="submit" className="cadastrar-btn">
            ENTRAR
          </button> </Link>
        </form>
        <Link to="/Cadastro" className="link-cadastro">
          Não tem conta? Cadastre-se
        </Link>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Cadastro;
