import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { horloge } from './reducers/horloge';
import { hello } from './reducers/hello';

export const configureStore = () => {
  return createStore(combineReducers({
    horloge,
    hello,
  }), composeWithDevTools());
};

/*
{
  horloge: {
    format: 'HH:mm:ss',
    delay: 1000,
  },
  hello: {
    prenom: 'Romain',
  }
}
 */