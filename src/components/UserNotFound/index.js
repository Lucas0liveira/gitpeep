import React from 'react';
import notFound from '../../assets/notFound.svg';
import SearchBar from '../SearchBar';
import './styles.scss';

export default () => (
  <div>
    <div className="sheet message text-center">
      <div className="icon">
        <img src={notFound} alt="imagem usuário não encontrado" />
      </div>
      <p>Usuário não encontrado</p>
    </div>
    <SearchBar />
  </div>
);
