import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../SearchBar';
import './styles.scss';

const BASE_URL = 'http://api.github.com/users/';

export default function User() {
  const [user, setUser] = useState('');
  const { username } = useParams();

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(`${BASE_URL}${username}`);
        setUser(response.data);
      } catch (error) {
        setUser(null);
      }
    }

    fetchUser();
  });

  return (
    <>
      <div className="container mt-5">
        <SearchBar />
        <div className="user">
          <p>{user.name}</p>

          <div className="user-profile ">
            <div className="user-profile-avatar">
              <img
                src={user.avatar_url}
                alt="imagem do usuário"
              />
            </div>
            <div className="user-profile-stats">
              <p className="counter">
                {'Repositórios: '}
                <span className="counter-flavour__1">
                  {user.public_repos || '?'}
                </span>
              </p>
              <p className="counter">
                {'Seguidores: '}
                <span className="counter-flavour__2">
                  {user.followers || '?'}
                </span>
              </p>
              <p className="counter">
                {'Seguindo: '}
                <span className="counter-flavour__3">
                  {user.following}
                </span>
              </p>
            </div>
          </div>
          <p>
            @
            {user.login}
          </p>
          <p>{user?.location}</p>
          <p className="text-center">
            &quot;
            {user?.bio}
            &quot;
          </p>
          <a href={user?.userUrl}>
            <button className="btn btn-primary" type="button">
              Visitar no GitHub
            </button>
          </a>
          <div className="buttons">
            <Link to={`/user/${user.login}/repos`}>
              <button
                className="btn btn-primary buttons-repos"
                type="button"
              >
                Repos
              </button>
            </Link>
            <Link to={`/user/${user.login}/starred`}>
              <button
                className="btn btn-primary buttons-starred"
                type="button"
              >
                Starred
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
