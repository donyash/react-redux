import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

//for testing thunks
import thunk from 'redux-thunk';
import nock from 'nock';  //http calls
import configureMockStore from 'redux-mock-store';


//Test a sync action
describe ('Course Actions', () => {
    describe('createCourseSuccess', () => {
        it('should create a CREATE_COURSE_SUCCESS action', () => {
            
            //arange
             const course = {id: 'clean-code', title: 'Clean Code'};
             const expectedAction = {
                 type: types.CREATE_COURSE_SUCCESS,
                 course: course
             };

            //act
            const action = courseActions.createCourseSuccess(course);

            //assert
            expect(action).toEqual(expectedAction);
        });
    });
});


const middleware = [thunk];
const mockStore = configureMockStore(middleware);
//Test thunk
describe ('Async Actions', () => {
    afterEach( ()=> {
        nock.cleanAll();
    });


    // can open up delay.js and change to 0 so test will run quicker
    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        //we don't need this because we're using a mock api to build up the app
        // if we were hitting an actual api, define the precise URL to hit
        // nock captures the call and returns the fake response instead

        //example to call nock:
        //nock('http://example.com')
        // .get('/courses')
        // .reply(200, {body: {course: [{id: 1, firstName: 'Cory', lastName: 'House'}] }});


        //test data setup
        const expectedActions = [
            {type: types.BEGIN_AJAX_CALL},
            {type: types.LOAD_COURSES_SUCCESS, 
                body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
        ];


        //send the mock store initial state and the actions we're expecting
        const store = mockStore({courses: []}, expectedActions);

        store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();

            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            
            //this callback declares we are done - tells Mocha framework 
            // async work is complete  (completes the async flow)
            done();
        })

    });
});