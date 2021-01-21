import {
  applyMiddleware,
  bindActionCreators,
  combineReducers,
  createStore,
  compose,
} from "redux";
import {connect} from "react-redux";
import thunk from "redux-thunk";

import {globalReducer} from "./global";

import * as GlobalActions from "./global";

let store = null;

export function setupStore() {
  if (!store) {
    store = createStore(
      combineReducers({
        global: globalReducer,
      }),
      compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : (f) => f
      )
    );
  }

  return store;
}

export function getStore() {
  return store;
}

export function getActions() {
  return {
    ...GlobalActions,
  };
}

export function setupReduxConnection(getProps) {
  function mapStateToProps(state) {
    if (Array.isArray(getProps)) {
      return getProps.reduce((dict, item) => {
        dict[item] = state[item];
        return dict;
      }, {});
    }

    return getProps(state);
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(getActions(), dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps);
}
