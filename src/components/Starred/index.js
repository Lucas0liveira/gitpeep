import React from 'react';
import PropTypes from 'prop-types';
import {
  FaStar, FaEye, FaLink, FaCodeBranch,
} from 'react-icons/fa';
import './styles.scss';

export default function Starred({
  name, link, watchers, stargazers, description, forks, owner, ownerAvatar,
}) {
  return (
    <div>
      <div className="card repo text-start">
        <div className="card-body">
          <h5 className="cart-title fw-bold">{name}</h5>
          <div className="owner">
            <div className="owner-avatar">
              <img
                src={ownerAvatar}
                alt="imagem do proprietário do repositório"
              />
            </div>
            <p>
              @
              {owner}
            </p>
          </div>
          <p className="card-text">{description}</p>
          <div className="icons">
            <div className="icons-text">
              <span>
                {stargazers}
              </span>
              <FaStar size="22" color="gold" />
            </div>

            <div className="icons-text">
              <span>
                {watchers}
              </span>
              <FaEye size="22" color="tomato" />
            </div>

            <div className="icons-text">
              <span>
                {forks}
              </span>
              <FaCodeBranch size="22" color="navy" />
            </div>

            <div className="icons-text">
              <a href={link}>
                <FaLink size="22" type="button" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Starred.defaultProps = {
  description: '',
  watchers: '?',
  stargazers: '?',
  forks: '?',

};

Starred.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  owner: PropTypes.string.isRequired,
  ownerAvatar: PropTypes.string.isRequired,
  watchers: PropTypes.string,
  stargazers: PropTypes.string,
  forks: PropTypes.string,
  link: PropTypes.string.isRequired,

};
