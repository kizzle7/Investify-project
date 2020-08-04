
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { createStore, compose, applyMiddleware } from 'redux';

const ConfigureStore = () => {
  var assumedState = JSON.parse(sessionStorage.getItem(""));
  var authState = JSON.parse(localStorage.getItem("token"));
  var intialState = {};
  if (assumedState != null) {
    intialState = assumedState;
  } else if (
    authState !== null &&
    authState.token !== "" && assumedState === null
  ) {
    intialState = { ...intialState, auth: { ...authState } };
  }

  const logger = store => next => action => {
    let result;
    result = next(action);
    return result;
  };

  const middleWares = [thunk, logger];
  return createStore(
    rootReducer,
    intialState,
    compose(applyMiddleware(...middleWares))
  );
};

export default ConfigureStore();
