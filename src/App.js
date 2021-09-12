/* eslint-disable react/jsx-no-bind */
import { React, useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import User from './components/User';
import UserNotFound from './components/UserNotFound';
import './App.scss';

const BASE_URL = 'http://api.github.com/users/';
// const CLIENT_ID = '5b022763b4d260298a2e';
// const CLIENT_SECRET = '80882e2c6e6e7625a8b6b2df483de4e116dc5492';

function App() {
  const [user, setUser] = useState('');

  async function handleSearch(searchString) {
    if (searchString === '') {
      setUser('');
      return;
    }

    try {
      const searchResult = await axios.get(`${BASE_URL}${searchString}`);
      setUser(searchResult.data);
    } catch (error) {
      setUser('');
    }
  }

  return (
    <div className="container">
      <div className="app">
        <SearchBar onSearch={handleSearch} />
        {user === ''
          ? <UserNotFound />
          : (
            <User
              avatar={user.avatar_url}
              login={user.login}
              userUrl={user.html_url}
              name={user.name}
              location={user.location}
              bio={user.bio}
              reposQt={String(user.public_repos)}
              followersQt={String(user.followers)}
              followingQt={String(user.following)}
            />
          )}
      </div>
    </div>
  );
}

export default App;
