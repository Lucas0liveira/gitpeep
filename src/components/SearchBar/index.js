/* eslint-disable react/prop-types */
import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default (props) => {
  function handleSearch(event) {
    event.preventDefault();
    props.onSearch(event.target[0].value);
  }

  return (
    <form
      className="row"
      action="/"
      method="get"
      onSubmit={handleSearch}
    >
      <div className="col-sm-8">
        <input
          type="text"
          placeholder="Buscar usuários"
          className="form-control"
        />
      </div>
      <div className="col-sm-4">
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
