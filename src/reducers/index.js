import{combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import products from './productReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import session from './sessionReducer';

const rootReducer = combineReducers({
    courses,    //shorthand property name   courses: courses
    authors,
    products,
    ajaxCallsInProgress,
    session
});

export default rootReducer;