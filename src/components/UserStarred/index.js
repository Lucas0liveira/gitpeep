import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import Starred from '../Starred';

const BASE_URL = 'http://api.github.com/users/';

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

        {starredRepos.length === 0
          ? <h1 className="mt-5"> Nada por aqui. </h1>
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
