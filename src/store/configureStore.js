import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import entriesReducer from "../data/reducers/entries.reducers";
import modalsReducer from "../data/reducers/modals.reducers";

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducer,
    }),
    composeWithDevTools()
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
