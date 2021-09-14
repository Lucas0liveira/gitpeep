import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import Starred from '../Starred';

import { BASE_URL } from '../../definitions';

export default () => {
  const { username } = useParams();
  const [starredRepos, setStarredRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await axios.get(`${BASE_URL}${username}/starred`);
        setStarredRepos(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRepos();
  }, []);

  return (
    <div className="sheet">
      <div className="header">
        <Link to={`/user/${username}`}>
          <button
            type="button"
            className="btn btn-primary"
          >
            <FaArrowLeft />
          </button>
        </Link>
        <p className="h2 fw-bold">Starred</p>
      </div>

      <div className="repos">

        {starredRepos.length === 0
          ? <p className="mt-5 h3"> Nada por aqui. </p>
          : starredRepos.map((starred) => (
            <Starred
              key={starred.id}
              name={starred.name}
              description={starred.description}
              link={starred.html_url}
              watchers={String(starred.watchers_count)}
              stargazers={String(starred.stargazers_count)}
              forks={String(starred.forks_count)}
              owner={starred.owner.login}
              ownerAvatar={starred.owner.avatar_url}
            />
          ))}
      </div>
    </div>
  );
};
