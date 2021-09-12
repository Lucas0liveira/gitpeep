import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaEye, FaLink } from 'react-icons/fa';
import './styles.scss';

export default function Repo({
  name, link, watchers, stargazers, description,
}) {
  return (
    <div>
      <div className="card repo text-start">
        <div className="card-body">
          <h5 className="card-title fw-bold">{name}</h5>
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

Repo.defaultProps = {
  description: '',
  watchers: '?',
  stargazers: '?',
};

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string,
  watchers: PropTypes.string,
  stargazers: PropTypes.string,
};
