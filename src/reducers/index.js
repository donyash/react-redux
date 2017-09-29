import{combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import products from './productReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import session from './sessionReducer';
import profile from './profileReducer';


const rootReducer = combineReducers({
    courses,    //shorthand property name   courses: courses
    authors,
    products,
    ajaxCallsInProgress,
    session
    //,profile   //need to do some refactoring here...see sessionReducer 
});

export default rootReducer;