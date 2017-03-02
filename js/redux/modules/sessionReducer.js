import { formatDataObject } from '../../lib/dataFormatHelpers';

// initial state
const sessionPageInitialState = {
  isLoading: true,
  dataSource: {},
};

// action types
const GET_SESSION = 'GET_SESSION';
const SET_IS_LOADING_FALSE = 'SET_IS_LOADING_FALSE';

// action creator
export const setIsLoading = () => ({
  type: SET_IS_LOADING_FALSE,
  payload: null,
});

const getSession = data => ({
  type: GET_SESSION,
  payload: data,
});

// fetch thunk
export const fetchSession = (speakerId) => {
  return (dispatch) => {
    const endpoint = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`;

    fetch(endpoint)
      // if fetch is successful, read our JSON out of the response
      .then(response => response.json())
      .then((data) => {
        dispatch(getSession(data));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
};

// reducer
export default (state = sessionPageInitialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_FALSE:
      return { ...state, isLoading: false };
    case GET_SESSION:
      // console.log(action.payload);
      const formattedData = formatDataObject(action.payload);
      return { ...state, dataSource: formattedData };
    default:
      return state;
  }
};
