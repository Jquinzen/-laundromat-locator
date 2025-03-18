import React from 'react';
import './Vantagens.css';

const Vantagens = () => {
  return (
    <section id="vantagens" className="vantagens">
      <h3>Vantagens</h3>
      <div className="vantagens-conteudo">
        <div className="vantagens-texto">
          <h2>Diga adeus ao estresse de enfrentar filas na lavanderia!</h2>
          <p>
            A LaVou facilita a localização de lavanderias próximas, rastreia máquinas disponíveis e analisa os dias mais movimentados, reduzindo filas e oferecendo mais conveniência.
          </p>
        </div>
        <div className="vantagens-imagens">
          <img src="./Vantagens.png" alt="" className="vantagem-imagem" />
          <img src="./Vantagens2.png" alt="" className="vantagem-imagem" />
          <img src="./Vantagens3.png" alt="" className="vantagem-imagem" />
          <img src="./Vantagens4.png" alt="" className="vantagem-imagem" />
        </div>
      </div>
    </section>
  );
};

export default Vantagens;