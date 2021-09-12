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

        <div className="user-profile ">
          <div className="user-profile-avatar">
            <img
              src={avatar}
              alt="imagem do usuário"
            />
          </div>
          <div className="user-profile-stats">
            <p className="counter">
              {'Repositórios: '}
              <span className="counter-flavour__1">
                {reposQt}
              </span>
            </p>
            <p className="counter">
              {'Seguidores: '}
              <span className="counter-flavour__2">
                {followersQt}
              </span>
            </p>
            <p className="counter">
              {'Seguindo: '}
              <span className="counter-flavour__3">
                {following}
              </span>
            </p>
          </div>
        </div>
        <p>
          @
          {login}
        </p>
        <p>{location}</p>
        <p className="text-center">
          &quot;
          {bio}
          &quot;
        </p>
        <a href={userUrl}>
          <button className="btn btn-primary" type="button">
            Visitar no GitHub
          </button>
        </a>
        <div className="buttons">
          <button className="btn btn-primary buttons-repos" type="button">Repos</button>
          <button className="btn btn-primary buttons-starred" type="button">Starred</button>
        </div>
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
