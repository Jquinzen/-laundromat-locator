import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import './NovoCadastro.css';
import Footer from './components/Footer';

const NovoCadastro = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const salvaCadastro = (data) => {
    const novoCadastro = {
      nomeFantasia: data.nomeFantasia,
      razaoSocial: data.razaoSocial,
      endereco: data.endereco,
      imagemFachada: data.imagemFachada,
      mapa: data.mapa,
      telefone: data.telefone,
      avaliacao: 0,
      horarioFuncionamento: {
        abertura: parseInt(data.horarioAbertura),
        fechamento: parseInt(data.horarioFechamento),
      },
    };

    axios
      .post('http://localhost:5000/lavanderias', novoCadastro)
      .then(() => {
        alert('Lavanderia cadastrada com sucesso!');
        navigate('/'); // Redireciona para a página inicial
      })
      .catch((error) => {
        console.error('Erro ao cadastrar lavanderia:', error);
        alert('Erro ao cadastrar a lavanderia. Por favor, tente novamente.');
      });
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2>Cadastro de Nova Lavanderia</h2>
        <form onSubmit={handleSubmit(salvaCadastro)} className="form">
          <div className="form-group">
            <label>Nome Fantasia:</label>
            <input {...register('nomeFantasia')} required />
          </div>
          <div className="form-group">
            <label>Razão Social:</label>
            <input {...register('razaoSocial')} required />
          </div>
          <div className="form-group">
            <label>Endereço:</label>
            <input {...register('endereco')} required />
          </div>
          <div className="form-group">
            <label>Imagem (URL):</label>
            <input {...register('imagemFachada')} required />
          </div>
          <div className="form-group">
            <label>Mapa (URL):</label>
            <input {...register('mapa')} />
          </div>
          <div className="form-group">
            <label>Telefone:</label>
            <input {...register('telefone')} required />
          </div>
          <div className="form-group">
            <label>Horário de Abertura (em horas, ex: 8 para 08:00):</label>
            <input {...register('horarioAbertura')} type="number" required />
          </div>
          <div className="form-group">
            <label>Horário de Fechamento (em horas, ex: 20 para 20:00):</label>
            <input {...register('horarioFechamento')} type="number" required />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Cadastrar
            </button>
            <button type="button" onClick={() => reset()} className="reset-btn">
              Limpar
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default NovoCadastro;
