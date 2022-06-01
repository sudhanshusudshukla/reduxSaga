import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import entriesReducer from "../data/reducers/entries.reducers";
import modalsReducer from "../data/reducers/modals.reducers";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducer,
    }),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};

export default configureStore;

//below code can be optimised as above
// const combinedReducers = combineReducers({
//     entries: entriesReducer,
//   });

//   const store = createStore(combinedReducers);
//   return store;

// const store = createStore(
//   reducer, /* preloadedState, */
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
