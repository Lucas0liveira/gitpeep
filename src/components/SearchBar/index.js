/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './styles.scss';
import { BASE_URL } from '../../definitions';

export default () => {
  const history = useHistory();

  async function handleSearch(event) {
    event.preventDefault();
    const searchString = event.target[0].value;

    if (searchString.length === 0) {
      history.push('/');
      return;
    }

    try {
      await axios.get(`${BASE_URL}${searchString}`);
      history.push(`/user/${searchString}`);
    } catch (error) {
      history.push('/not-found');
    }
  }

  return (
    <form
      className="search"
      action="/"
      method="get"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Buscar usuários"
        className="search-bar form-control"
      />
      <div>
        <button
          className="btn btn-primary"
          type="submit"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  );
};
