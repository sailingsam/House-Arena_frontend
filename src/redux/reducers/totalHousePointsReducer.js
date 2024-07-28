import { UPDATE_HOUSE_POINTS } from '../actions/totalHousePointsActions';

const initialState = {
  kong: 0,
  leo: 0,
  phoenix: 0,
  tusker: 0,
};

const housePointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HOUSE_POINTS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default housePointsReducer;