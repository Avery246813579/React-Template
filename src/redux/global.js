const defaultState = {
  isLoading: true,
  isDarkMode: false,
  isMounted: false
};

const UPDATE_LOADING = "UPDATE_LOADING";
const UPDATE_DARK_MODE = "UPDATE_DARK_MODE";
const UPDATE_MOUNTED = "UPDATE_MOUNTED";

export function updateLoading(credentials) {
  return {
    type: UPDATE_LOADING,
    payload: credentials,
  };
}

export function updateDarkMode(credentials) {
  return {
    type: UPDATE_DARK_MODE,
    payload: credentials,
  };
}

export function updateMounted(credentials) {
  return {
    type: UPDATE_MOUNTED,
    payload: credentials,
  };
}

export const globalReducer = (state = defaultState, action) => {
  let {type, payload} = action;

  switch (type) {
    default:
      return state;
    case UPDATE_LOADING:
      return {...state, isLoading: payload};
    case UPDATE_DARK_MODE:
      return {...state, isDarkMode: payload};
    case UPDATE_MOUNTED:
      return {...state, isMounted: payload};
  }
};
