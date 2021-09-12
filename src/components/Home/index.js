import React from 'react';
import search from '../../assets/search.svg';
import SearchBar from '../SearchBar';

export default () => (
  <div className="text-center">
    <h1 className="mt-4">Bem vindo ao GitPeep!</h1>
    <div className="icon">
      <img src={search} alt="imagem usuário não encontrado" />
    </div>
    <h4 className="mt-3">
      Aqui você pode dar uma espiadinha
      nos projetos favoritos
      e trabalhos mais recentes de seus colegas.
    </h4>
    <h1 className="mt-5">Comece procurando por um usuário!</h1>
    <SearchBar />
  </div>
);
