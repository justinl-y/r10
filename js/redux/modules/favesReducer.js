import { getFaves, addFave, deleteFave } from '../../config/models';
import { formatSessionData } from '../../lib/dataFormatHelpers';

// action types
const GET_FAVES = 'GET_FAVES';
const ADD_FAVE = 'ADD_FAVE';
const DELETE_FAVE = 'DELETE_FAVE';

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

export const addRealmFave = id => ({
  type: ADD_FAVE,
  payload: id,
});

export const deleteRealmFave = id => ({
  type: DELETE_FAVE,
  payload: id,
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

        console.log('faves thunk run');

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
    case ADD_FAVE:
      addFave(action.payload);

      return state;
    case DELETE_FAVE:
      deleteFave(action.payload);

      return state;
    default:
      return state;
  }
};
