import { React } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export default function User({
  avatar, login, userUrl, name, location, bio, reposQt, followersQt, following,
}) {
  return (
    <>
      <div className="user">
        <p>{name}</p>

        <div className="user-profile row ">
          <div className="user-profile-avatar col-md-6">
            <img
              src={avatar}
              alt="imagem do usuário"
            />
          </div>
          <div className="user-profile-stats col-md-6">
            <p>
              <span>Repositórios: </span>
              {reposQt}
            </p>
            <p>
              <span>Seguidores: </span>
              {followersQt}
            </p>
            <p>
              <span>Seguindo: </span>
              {following}
            </p>
          </div>

        </div>
        <p>
          @
          {login}
        </p>
        <p>{location}</p>
        <p>
          &quot;
          {bio}
          &quot;
        </p>
        <a href={userUrl}>
          <button className="btn btn-primary" type="button">
            Visitar no GitHub
          </button>
        </a>
      </div>
    </>
  );
}

User.defaultProps = {
  reposQt: '?',
  followersQt: '?',
  following: '?',
  bio: '',
};

User.propTypes = {
  avatar: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  userUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bio: PropTypes.string,
  reposQt: PropTypes.string,
  followersQt: PropTypes.string,
  following: PropTypes.string,
};
