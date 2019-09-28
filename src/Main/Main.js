import React from 'react';
import { Provider } from 'react-redux';

import logo from 'assets/img/logo.svg';

// css normalize first
import 'assets/styles/normalize.css';

// app styles
import 'assets/styles/base.css';
import 'assets/styles/main.css';

import createStore from 'store';

import { Routes } from 'modules/router/components';


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

          <Routes />
        </header>
      </div>
    </Provider>
  );
};


export default Main;
