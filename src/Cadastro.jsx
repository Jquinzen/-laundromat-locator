
import { Link } from "react-router-dom";
import React from "react";
import "./Cadastro.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Cadastro = () => {
  // Função para lidar com o envio do formulário
  const handleSubmit = () => {
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div>
      <Navbar />
      <div className="cadastro-container">
        <div className="login-section">
          <div className="logo">
            <img src="image copy.png" alt="LaVou" />
          </div>
          <h2>Bem-vindo de volta!</h2>
          <p className="p">Acesse sua conta agora mesmo.</p>
          <Link to="/Login">
            <button className="entrar-btn">ENTRAR</button>
          </Link>
          <a href="#" className="esqueci-senha">
            Esqueci minha senha.
          </a>
        </div>

        <div className="cadastro-section">
          <h2>Crie sua conta</h2>
          <p>Preencha seus dados</p>
          <form className="cadastro-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="CNPJ" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Senha" required />
            </div>
            <button type="submit" className="cadastrar-btn">
              CADASTRAR
            </button>
          </form>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Cadastro;
