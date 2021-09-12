/* eslint-disable react/prop-types */
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './styles.scss';

export default (props) => {
  function handleSearch(event) {
    event.preventDefault();
    props.onSearch(event.target[0].value);
  }

  return (
    <form
      className="search"
      action="/"
      method="get"
      onSubmit={handleSearch}
    >
      <div>
        <input
          type="text"
          placeholder="Buscar usuários"
          className="search-bar form-control"
        />
      </div>
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
