import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './rootReducer';
import rootSagas from './rootSagas';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(...middleware)),
  );

  sagaMiddleware.run(rootSagas);

  return store;
}
