import React from 'react';
import search from '../../assets/search.svg';
import SearchBar from '../SearchBar';
import './styles.scss';

export default () => (
  <div>
    <div className="sheet text-center">
      <p className="mt-2 fw-bold h1">Bem vindo ao GitPeep!</p>
      <div className="icon">
        <img src={search} alt="imagem usuário não encontrado" />
      </div>
      <p className="mt-3 h4">
        Aqui você pode dar uma espiadinha
        nos projetos favoritos
        e trabalhos mais recentes de seus colegas.
      </p>
    </div>
    <SearchBar />
    <p className="text-center mt-1 h3">Comece procurando por um usuário!</p>
  </div>
);
