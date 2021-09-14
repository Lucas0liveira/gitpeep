import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaUserFriends, FaGithub } from 'react-icons/fa';
import { GoRepo, GoStar } from 'react-icons/go';
import SearchBar from '../SearchBar';
import { BASE_URL } from '../../definitions';
import './styles.scss';

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
      <div className="mt-5">
        <SearchBar />
        <div className="sheet user">
          <p className="fw-bold h3">{user.name}</p>

          <div className="user-avatar">
            <img
              src={user.avatar_url}
              alt="imagem do usuário"
            />
          </div>

          <p className="mt-2 lead">{`@${user.login}`}</p>

          <p>{user?.location}</p>

          <p className="text-center blockquote">{`"${user?.bio}"`}</p>

          <div className="stats text-center">
            <div>
              <span>
                {`${user.public_repos}    ` || '?'}
              </span>
              <GoRepo color="tomato" />
            </div>

            <div>
              <span>
                {`${user.followers}   ` || '?'}
              </span>
              <FaUserFriends size="22" color="gold" />
            </div>

            <a href={user.html_url}>
              <FaGithub type="button" />
            </a>
          </div>

          <div className="buttons">
            <Link to={`/user/${user.login}/repos`}>
              <button
                className="btn btn-primary"
                type="button"
              >
                <GoRepo />
                Repos
              </button>
            </Link>
            <Link to={`/user/${user.login}/starred`}>
              <button
                className="btn btn-primary"
                type="button"
              >
                <span className="align-middle">
                  <GoStar />
                  Starred
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
