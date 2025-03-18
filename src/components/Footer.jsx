import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="logo.png" alt="LaVou" className="img" />
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h4>Sobre</h4>
          <ul>
            <li>Quem Somos</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Suporte</h4>
          <ul>
            <li>Feedback</li>
            <li>Contato</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-icons">
            <a href="#" ><img src="./_Facebook.png" alt="" /></a>
            <a href="#" ><img src="./_Instagram.png" alt="" /></a>
            <a href="#" ><img src="./_Linkedin.png" alt="" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
         <p>&copy; 2024 LaVou. Todos os direitos reservados.</p>
        <nav>
          <a href="#">Política de Privacidade</a> |
          <a href="#">Termos de Uso</a> |
          <a href="#">Mapa do Site</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;