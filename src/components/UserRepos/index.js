import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import Repo from '../Repo';

const BASE_URL = 'http://api.github.com/users/';

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
  });

  return (
    <div>
      <Link to={`/user/${username}`}>
        <button
          type="button"
          className="btn btn-primary"
        >
          <FaArrowLeft />
        </button>
      </Link>

      <div className="repos">
        {repos.map((repo) => (
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
