import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default () => {
  const { username } = useParams();
  return (
    <div>
      <Link to={`/user/${username}`}>
        <button
          type="button"
          className="btn btn-primary"
        >
          Voltar
        </button>
      </Link>
    </div>
  );
};
