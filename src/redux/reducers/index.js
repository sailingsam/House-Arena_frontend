import { combineReducers } from 'redux';
import totalHousePointsReducer from './totalHousePointsReducer';
import eventsReducer from './eventsReducer';

const rootReducer = combineReducers({
    totalHousePoints: totalHousePointsReducer,
    events: eventsReducer,
    // other reducers can be added here
});

export default rootReducer;