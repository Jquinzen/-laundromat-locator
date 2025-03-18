import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./DetalhesLavanderia.css";
import { Estrelas } from "./components/Estrelas.jsx";  

const DetalhesLavanderia = () => {
  const { id } = useParams();
  const [lavanderia, setLavanderia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comentariosState, setComentariosState] = useState([]);
  const [notasState, setNotasState] = useState([]);
  const [nomesState, setNomesState] = useState([]);

  useEffect(() => {
    const fetchLavanderia = async () => {
      try {
        const response = await fetch(`http://localhost:5000/lavanderias/${id}`);
        if (!response.ok) {
          throw new Error("Lavanderia não encontrada");
        }
        const data = await response.json();
        setLavanderia(data);
        setComentariosState(data.comentarios || []);
        setNotasState(data.notas || []);
        setNomesState(data.nomes || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLavanderia();
  }, [id]);

  function calculaMedia() {
    if (notasState.length === 0) return 0;
    const soma = notasState.reduce((acc, nota) => acc + nota, 0);
    return soma / notasState.length;
  }

  function avaliaLavanderia() {
    const nome = prompt("Qual seu nome?");
    if (nome.trim() === "") {
      alert("Erro... você deve informar o seu nome");
      return;
    }
    const comentario = prompt("Qual seu comentário sobre a lavanderia?");
    if (comentario.trim() === "") {
      alert("Erro... você deve indicar um comentário");
      return;
    }
    const nota = Number(prompt(`Qual a sua nota para a lavanderia ${lavanderia.nomeFantasia}?(entre 1-5)`));
    if (nota < 1 || nota > 5 || isNaN(nota)) {
      alert("Informe uma nota entre 1 e 5");
      return;
    }

    setNomesState([...nomesState, nome]);
    setComentariosState([...comentariosState, comentario]);
    setNotasState([...notasState, nota]);

    fetch(`http://localhost:5000/lavanderias/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...lavanderia,
        comentarios: [...comentariosState, comentario],
        notas: [...notasState, nota],
        nomes: [...nomesState, nome]
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(() => {
        alert("Lavanderia avaliada com sucesso!");
      })
      .catch(error => {
        console.error("Erro ao enviar dados de avaliação", error);
        alert("Erro ao enviar sua avaliação");
      });
  }

  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar />
      <div className="detalhes-lavanderia">
        {lavanderia ? (
          <div className="detalhes-lavanderia-container">
            <div className="detalhes-lavanderia-info">
              <h1>{lavanderia.nomeFantasia}</h1>
              <p><strong>Telefone:</strong> {lavanderia.telefone}</p>
              <p><strong>Endereço:</strong> {lavanderia.endereco}</p>
            
  <p><strong>Horário de Funcionamento: </strong> das {lavanderia.horarioFuncionamento.abertura}:00 às {lavanderia.horarioFuncionamento.fechamento}:00</p>
             
            </div>
            <div className="detalhes-lavanderia-imagens">
              <div className="fachada">
                <img
                  src={lavanderia.imagemFachada}
                  alt={`Fachada de ${lavanderia.nomeFantasia}`}
                />
              </div>
              <div className="mapa">
                <iframe
                  src={lavanderia.mapa}
                  title={`Mapa de ${lavanderia.nomeFantasia}`}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="detalhes-lavanderia-botoes">
                <a
                  href="https://www.google.com/maps?q=-31.772951,-52.342161"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Abrir no Google Maps</button>
                </a>
                <button onClick={avaliaLavanderia}>Avaliar Lavanderia</button>
              </div>
            <div className="detalhes-lavanderia-avaliacoes">
              <h2>Avaliações</h2>
              {notasState.length > 0 ? (
                <div>
                  
                  <p className="media"><strong>Média de Avaliação</strong> <Estrelas num={calculaMedia()} /></p>
<div className="comentarios">
  {nomesState.map((nome, index) => (
    <div key={index} className="comentario">
      <div className="nome-e-estrelas">
        <strong>{nome}</strong>
        <Estrelas num={notasState[index]} />
      </div>
      <p className="comentario-texto">{comentariosState[index]}</p>
    </div>
  ))}
                  </div>
                </div>
              ) : (
                <p className="sem-avaliacao">Sem avaliações ainda.</p>
              )}
            </div>
          </div>
        ) : (
          <p>Lavanderia não encontrada.</p>
        )}
      </div>
      <footer className="footer">
      <div className="footer-logo">
        <img src="\public\logo.png" alt="LaVou" className="img" />
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
            <a href="#" ><img src="\public\_Facebook.png" alt="" /></a>
            <a href="#" ><img src="\public\_Instagram.png" alt="" /></a>
            <a href="#" ><img src="\public\_Linkedin.png" alt="" /></a>
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
    </div>
  );
};

export default DetalhesLavanderia;
