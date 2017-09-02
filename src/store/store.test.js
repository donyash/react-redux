import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

//this is an integration test to make sure all the pieces are working
// for a small amount of work this is very useful
describe('Store', () => {
    it('Should handle creating courses', () => {
        //arragng
        const store = createStore(rootReducer, initialState);
        const course = {title: 'Clean Code'};
        //act
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        //assert
        const actual = store.getState().courses[0];
        const expected = {title: 'Clean Code'};

        expect(actual).toEqual(expected);

    });


    //could create an array of actions and assert that the final result is what we expect
    //dispatch 2 create course success actions and 
    // an update course success action
    //assert that the final store has 2 courses with the expected values
});