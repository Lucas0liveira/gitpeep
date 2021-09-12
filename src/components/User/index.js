import { React } from 'react';
import PropTypes from 'prop-types';

export default function User({
  avatar, login, url, name, location, bio, reposQt, followersQt, following,
}) {
  PropTypes = {
    user: PropTypes.object.isRequired,
  };

  return (
    <>
      <div className="user-avatar">
        <img
          src={avatar}
          className="rounded mx-auto d-block"
          alt="imagem do usuário"
        />
      </div>
    </>
  );
}

User.propTypes = {
  avatar: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  reposQt: PropTypes.number.isRequired,
  followersQt: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
};
