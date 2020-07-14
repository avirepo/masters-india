import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import INITIAL_STATE from './initialState';
import { rootReducer } from './rootReducer';

const middleware = [thunk];

// eslint-disable-next-line import/no-mutable-exports
let store;

if (process.env.REACT_APP_APP_ENV === 'dev') {
  store = createStore(
    rootReducer,
    INITIAL_STATE,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
        : (f) => f,
    ),
  );
} else {
  store = createStore(
    rootReducer,
    INITIAL_STATE,
    compose(applyMiddleware(...middleware)),
  );
}
persistStore(store);
export default store;
