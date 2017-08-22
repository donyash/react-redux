import{combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses    //shorthand property name   courses: courses
});

export default rootReducer;