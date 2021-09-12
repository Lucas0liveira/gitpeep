import React from 'react';
import notFound from '../../assets/notFound.svg';
import SearchBar from '../SearchBar';
import './styles.scss';

export default () => (
  <div className="message">
    <h1>Usuário não encontrado</h1>
    <div className="icon">
      <img src={notFound} alt="imagem usuário não encontrado" />
    </div>
    <SearchBar />
  </div>
);
