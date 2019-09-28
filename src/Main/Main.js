import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store';

import logo from '../assets/img/logo.svg';

// css normalize first
import '../assets/styles/normalize.css';

// app styles
import '../assets/styles/base.css';
import '../assets/styles/main.css';


const store = createStore();

const Main = () => {
  return (
    <Provider store={store}>
      <div className="main">
        <header className="main--header">
          <img src={logo} className="main--logo" alt="logo" />
          <p>
            Face Tricks
          </p>
          <a
            className="main--link"
            href="https://github.com/Hackbit/reactriot2019-gantastic"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repo
          </a>
        </header>
      </div>
    </Provider>
  );
};


export default Main;
