import { getFaves } from '../../config/models';
import { formatSessionData } from '../../lib/dataFormatHelpers';

// action types
const GET_FAVES = 'GET_FAVES';
const SET_IS_LOADING_FALSE = 'SET_IS_LOADING_FALSE';

// action creator
export const setIsLoading = () => ({
  type: SET_IS_LOADING_FALSE,
  payload: null,
});

const getFilteredFaves = data => ({
  type: GET_FAVES,
  payload: data,
});

// fetch thunk
export const fetchFaves = () => {
  return (dispatch) => {
    const endpoint = 'https://r10app-95fea.firebaseio.com/sessions.json';

    fetch(endpoint)
      // if fetch is successful, read our JSON out of the response
      .then(response => response.json())
      .then((data) => {
        // get realm fave ids
        const realmFaves = getFaves();
        // filter data with realm fave ids
        const sessionFiltered = data.filter(e => realmFaves.indexOf(e.session_id) > -1);

        dispatch(getFilteredFaves(sessionFiltered));
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  };
};

// initial state
const favesPageInitialState = {
  isLoading: true,
  dataSource: { blobData: {}, sectionIds: [], rowIds: [] },
};

// reducer
export default (state = favesPageInitialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_FALSE:
      return { ...state, isLoading: false };
    case GET_FAVES:
      const formattedData = formatSessionData(action.payload);
      return { ...state, dataSource: formattedData };
    default:
      return state;
  }
};
