import React from 'react';
import { Provider } from 'react-redux';

// css normalize first
import 'assets/styles/normalize.css';

// vendor stylesheets

// app styles
import 'assets/styles/base.css';
import 'assets/styles/main.css';

import createStore from 'store';

import { Layout } from 'modules/core/components';
import { Routes } from 'modules/router/components';


const store = createStore();

const Main = () => {
  return (
    <Provider store={store}>
      <div className="main">
        <Layout>
          <Routes />
        </Layout>
      </div>
    </Provider>
  );
};


export default Main;
