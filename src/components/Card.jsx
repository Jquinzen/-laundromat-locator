import { Link } from 'react-router-dom'; 
import './Card.css';
import { useState, useEffect } from 'react';
import { Estrelas } from './Estrelas.jsx'; 

const CartaoLavanderia = ({ id, nomeFantasia, endereco, imagemFachada, avaliacao, comentarios, notas, nomes }) => {
  const [comentariosState, setComentariosState] = useState(comentarios || []);
  const [notasState, setNotasState] = useState(notas || []);
  const [nomesState, setNomesState] = useState(nomes || []);

  useEffect(() => {
    setComentariosState(comentarios || []);
    setNotasState(notas || []);
    setNomesState(nomes || []);
  }, [comentarios, notas, nomes]);

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

    const nota = Number(prompt(`Qual a sua nota para a lavanderia ${nomeFantasia}?(entre 1-5)`));
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
        id,
        nomeFantasia,
        endereco,
        imagemFachada,
        avaliacao,
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

  return (
    <div className="cartao-lavanderia">
      <div className="cartao-lavanderia-imagem">
        <img src={imagemFachada} alt={nomeFantasia} />
      </div>
      <div className="cartao-lavanderia-info">
        <h3 className="cartao-lavanderia-titulo">{nomeFantasia}</h3>
        <p className="cartao-lavanderia-texto"><strong>Endereço:</strong> {endereco}</p>

        {notasState.length > 0 ? (
          <div>
 <Estrelas num={calculaMedia()} />
          </div>
        ) : (
          <p className="cartao-lavanderia-texto">Sem Avaliação</p>
        )}

        <Link to={`/lavanderia/${id}`} className="cartao-lavanderia-link">
          <button className="cartao-lavanderia-botao">Ver Detalhes</button>
        </Link>

        <button onClick={avaliaLavanderia} className="cartao-lavanderia-botao">Avaliar</button>
      </div>
    </div>
  );
};

export default CartaoLavanderia;
