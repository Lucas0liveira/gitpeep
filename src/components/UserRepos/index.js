import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import Repo from '../Repo';
import { BASE_URL } from '../../definitions';

export default () => {
  const { username } = useParams();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await axios.get(`${BASE_URL}${username}/repos`);
        setRepos(response.data);
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
        <p className="h2 fw-bold">Repos</p>
      </div>

      <div className="repos">
        {repos.length === 0
          ? (<p className="mt-5 h3"> Nada por aqui. </p>)
          : repos.map((repo) => (
            <Repo
              key={repo.id}
              name={repo.name}
              description={repo.description}
              link={repo.html_url}
              watchers={String(repo.watchers_count)}
              stargazers={String(repo.stargazers_count)}
            />
          ))}
      </div>
    </div>
  );
};
