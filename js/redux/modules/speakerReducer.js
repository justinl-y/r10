// initial state
const sessionPageInitialState = {
  isLoading: true,
  dataSource: [],
};

// action types
const GET_SPEAKER = 'GET_SPEAKER';
const SET_IS_LOADING_FALSE = 'SET_IS_LOADING_FALSE';

// action creator
export const setIsLoading = () => ({
  type: SET_IS_LOADING_FALSE,
  payload: null,
});

const getSpeaker = data => ({
  type: GET_SPEAKER,
  payload: data,
});

// fetch thunk
export const fetchSpeaker = (speakerId) => {
  return (dispatch) => {
    const endpoint = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`;

    fetch(endpoint)
      // if fetch is successful, read our JSON out of the response
      .then(response => response.json())
      .then((data) => {
        dispatch(getSpeaker(data));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
};

// reducer
export default (state = sessionPageInitialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_FALSE:
      return { ...state, isLoading: false };
    case GET_SPEAKER:
      return { ...state, dataSource: action.payload };
    default:
      return state;
  }
};
