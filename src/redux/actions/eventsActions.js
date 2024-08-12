import axios from 'axios';

export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';

export const fetchEventsRequest = () => ({
  type: FETCH_EVENTS_REQUEST,
});

export const fetchEventsSuccess = (events) => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: events,
});

export const fetchEventsFailure = (error) => ({
  type: FETCH_EVENTS_FAILURE,
  payload: error,
});

export const fetchEvents = () => {
  return async (dispatch) => {
    dispatch(fetchEventsRequest());
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL_BACKEND}/api/events`);
      dispatch(fetchEventsSuccess(response.data));
    } catch (error) {
      dispatch(fetchEventsFailure(error.message));
    }
  };
};