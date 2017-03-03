// import { getFaves } from '../../config/models';

// action types
const GET_FAVES = 'GET_FAVES';
const SET_IS_LOADING_FALSE = 'SET_IS_LOADING_FALSE';

// action creator
export const setIsLoading = () => ({
  type: SET_IS_LOADING_FALSE,
  payload: null,
});

const getFaves1 = data => ({
  type: GET_FAVES,
  payload: data,
});

// fetch thunk
export const fetchFaves = () => {
  return (dispatch) => {
    // const endpoint = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`;

    fetch(endpoint)
      // if fetch is successful, read our JSON out of the response
      .then(response => response.json())
      .then((data) => {
        dispatch(getFaves1(data));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
};

/* export const fetchRealmFaves = () => {
  const faves = getFaves();

  console.log(faves);
};*/

// initial state
const favesPageInitialState = {
  isLoading: true,
  dataSource: [],
};

// reducer
export default (state = favesPageInitialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_FALSE:
      return { ...state, isLoading: false };
    case GET_FAVES:
      return { ...state, dataSource: action.payload };
    default:
      return state;
  }
};
