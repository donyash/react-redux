import{combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import products from './productReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses,    //shorthand property name   courses: courses
    authors,
    products,
    ajaxCallsInProgress
});

export default rootReducer;