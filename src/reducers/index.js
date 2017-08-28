import{combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    courses,    //shorthand property name   courses: courses
    authors
});

export default rootReducer;