// action types
const GET_CODE_OF_CONDUCT = 'GET_CODE_OF_CONDUCT';
const SET_IS_LOADING_FALSE = 'SET_IS_LOADING_FALSE';

// action creator
export const setIsLoading = () => ({
  type: SET_IS_LOADING_FALSE,
  payload: null,
});

const getCodeOfConduct = data => ({
  type: GET_CODE_OF_CONDUCT,
  payload: data,
});

// fetch thunk
export const fetchCodeOfConduct = () => {
  return (dispatch) => {
    const endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
    fetch(endpoint)
      // if fetch is successful, read our JSON out of the response
      .then(response => response.json())
      .then((data) => {
        dispatch(getCodeOfConduct(data));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
};

// initial state
const aboutPageInitialState = {
  isLoading: true,
  dataSource: [],
};

// reducer
export default (state = aboutPageInitialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_FALSE:
      return { ...state, isLoading: false };
    case GET_CODE_OF_CONDUCT:
      return { ...state, dataSource: action.payload };
    default:
      return state;
  }
};
