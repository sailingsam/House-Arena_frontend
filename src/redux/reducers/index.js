import { combineReducers } from 'redux';
import totalHousePointsReducer from './totalHousePointsReducer';
import eventsReducer from './eventsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    totalHousePoints: totalHousePointsReducer,
    events: eventsReducer,
    user: authReducer,
    // other reducers can be added here
});

export default rootReducer;