import React from 'react';
import Navbar from "./components/Navbar";
import './Sobre.css';
import Footer from './components/Footer';

const Sobre = () => {
  return (
    <div>
      <Navbar />
    <section className="who-we-are">
      <h1 className="section-title">QUEM SOMOS</h1>
      <p className="section-description">
      O LaVou é um webapp projetado para revolucionar a forma como as pessoas utilizam lavanderias. 
Nossa plataforma visa oferecer uma solução prática, intuitiva e eficiente para otimizar o tempo de 
quem deseja encontrar lavanderias disponíveis sem complicações.
      </p>
      <div className="cards-container">
        <div className="card">
          <div className="card-icon">🚀</div>
          <h2 className="card-title">Nossa Missão</h2>
          <h3 className="card-text">
          Tornar o processo de lavagem de roupas 
          mais prático e acessível para todos.
          </h3>
        </div>
        <div className="card">
          <div className="card-icon">💡</div>
          <h2 className="card-title">Nossa Visão</h2>
          <h3 className="card-text">
          Ser a principal referência em gerenciamento 
de lavanderias, conectando usuários e 
estabelecimentos de maneira inteligente.
          </h3>
        </div>
        <div className="card">
          <div className="card-icon">⭐</div>
          <h2 className="card-title">Nossos Valores</h2>
          <h3 className="card-text">
          Construímos nosso trabalho baseando-nos
 em princípios sólidos que guiam cada 
decisão.
          </h3>
        </div>
      </div>
    </section>
    <div className='footer'>
    <Footer />
    </div>
    </div>
  );
};

export default Sobre;
