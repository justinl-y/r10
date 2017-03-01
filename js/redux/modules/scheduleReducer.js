import { formatSessionData } from '../../navigation/dataFormatHelpers';

// action types
const GET_SCHEDULE = 'GET_SCHEDULE';
const SET_IS_LOADING_FALSE = 'SET_IS_LOADING_FALSE';

// action creator
export const setIsLoading = () => ({
  type: SET_IS_LOADING_FALSE,
  payload: null,
});

const getSchedule = data => ({
  type: GET_SCHEDULE,
  payload: data,
});

// fetch thunk
export const fetchSchedule = () => {
  return (dispatch) => {
    const endpoint = 'https://r10app-95fea.firebaseio.com/sessions.json';
    fetch(endpoint)
      // if fetch is successful, read our JSON out of the response
      .then(response => response.json())
      .then((data) => {
        dispatch(getSchedule(data));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
};

// initial state
const aboutPageInitialState = {
  isLoading: true,
  dataSource: { blobData: {}, sectionIds: [], rowIds: [] },
};

// reducer
export default (state = aboutPageInitialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_FALSE:
      return { ...state, isLoading: false };
    case GET_SCHEDULE:
      const formattedData = formatSessionData(action.payload);

      // return { ...state, dataSource: action.payload };
      return { ...state, dataSource: formattedData };
    default:
      return state;
  }
};
