import './Home.css';
import CartaoLavanderia from './components/Card';
import Vantagens from './components/Vantagens'; 
import { useEffect, useState } from 'react';  
import { Link } from 'react-router-dom';
import axios from 'axios';  

const Home = () => {
  const [lavanderias, setLavanderias] = useState([]);
  const [exibirLavanderias, setExibirLavanderias] = useState([]); // Controlar cards visíveis

  useEffect(() => {
    axios.get('http://localhost:5000/lavanderias')  
      .then(response => {
        setLavanderias(response.data);  
      })
      .catch(error => {
        console.error('Erro ao buscar as lavanderias:', error);
      });
  }, []);

  // Atualizar o número de lavanderias exibidas com base no tamanho da tela
  useEffect(() => {
    const ajustarExibicao = () => {
      if (window.innerWidth <= 768) {
        setExibirLavanderias(lavanderias.slice(0, 3)); 
      } else {
        setExibirLavanderias(lavanderias.slice(0, 6)); 
      }
    };

    ajustarExibicao(); 

    // Adicionar um listener para mudanças de tela
    window.addEventListener('resize', ajustarExibicao);

    return () => {
      window.removeEventListener('resize', ajustarExibicao);
    };
  }, [lavanderias]);

  return (
    <div className="home">
      <section id="inicio" className="home-secao">
        <div className="home-conteudo">
          <div className="home-texto">
            <h2>
            <span className="destaque-azul-claro">Encontre as </span> <span className="destaque">lavanderias mais eficientes</span><span className="destaque-azul-claro"> e sem filas perto de você!</span>
            </h2>
            <p className='subtitulo'>
              A LaVou é a solução perfeita para a rotina corrida, entregando praticidade e economia de tempo e dinheiro.
            </p>
            <Link to="/TodasLavanderias"> <button className="home-botao">
              Encontre a Lavanderia Mais Próxima
              <span className="home-botao-icon"> → </span>
            </button> </Link>
          </div>
          <div className="home-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11409.807456221199!2d-52.33988871670745!3d-31.766229444335927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slavanderias!5e0!3m2!1spt-BR!2sbr!4v1732724562805!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section id="lavanderias" className="home-secao">
        <h2><span className="destaque">+50</span> Lavanderias Cadastradas</h2>
        <div className="lavanderia-grade">
          {exibirLavanderias.map((lavanderia) => (
            <CartaoLavanderia key={lavanderia.id} {...lavanderia} />
          ))}
        </div>
        <Link to="/TodasLavanderias">   
          <button className="home-saber-mais">Ver Mais</button>
        </Link>
      </section>
      <Vantagens />
    </div>
  );
};

export default Home;
