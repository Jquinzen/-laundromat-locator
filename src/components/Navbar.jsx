import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false); // Controlar estado do menu

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav className="barra-navegacao">
      <div className="marca-navegacao">
      <Link to="/"> <img src="/logo.png" alt="Logo" className="logo" /></Link>
      </div>
      <div className="menu-hamburguer" onClick={toggleMenu}>
        <span className="linha"></span>
        <span className="linha"></span>
        <span className="linha"></span>
      </div>
      <ul className={`links-navegacao ${menuAberto ? 'ativo' : ''}`}>
        <li>
          <Link to="/" onClick={() => setMenuAberto(false)}>Início</Link>
        </li>
        <li>
          <Link to="/Sobre" onClick={() => setMenuAberto(false)}>Sobre</Link>
        </li>
        <li>
          <Link to="/TodasLavanderias" onClick={() => setMenuAberto(false)}>Lavanderias</Link>
        </li>
        <li>
          <Link to="/Cadastro" onClick={() => setMenuAberto(false)}>
            <button className="botao-navegacao">Registre sua Loja</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
