import './TodasLavanderias.css';
import Navbar from "./components/Navbar";
import { useEffect, useState } from 'react';  
import { Link } from "react-router-dom";  
import axios from 'axios';  
import Footer from './components/Footer';
import { Estrelas } from './components/Estrelas.jsx';  

const TodasLavanderias = () => {
  const [lavanderias, setLavanderias] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/lavanderias')
      .then(response => {
        setLavanderias(response.data);  
      })
      .catch(error => {
        console.error('Erro ao buscar as lavanderias:', error);
      });
  }, []);
  function calculaMedia(lavanderia) {
    const soma = lavanderia.notas.reduce((acc, nota) => acc + nota, 0);
    return soma / lavanderia.notas.length;
  }

  return (
    <div>
      <Navbar />
      <div className="detalhes-lavanderia">
        <h2>Lavanderias Cadastradas</h2>
        <div className="laundry-list">
          {lavanderias.map((lavanderia) => (
            <div key={lavanderia.id} className="laundry-card">
              <h3>{lavanderia.nomeFantasia}</h3>
              <img src={lavanderia.imagemFachada} alt={lavanderia.nomeFantasia} className="img" />
              <p><strong>Endereço:</strong> {lavanderia.endereco}</p>
              {lavanderia.notas && lavanderia.notas.length > 0 ? (
                <div>
                  <Estrelas num={calculaMedia(lavanderia)} />
                </div>
              ) : (
                <p><strong>Avaliação:</strong> Sem Avaliação</p>
              )}

              <Link to={`/lavanderia/${lavanderia.id}`}>Ver Detalhes</Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TodasLavanderias;
