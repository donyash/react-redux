import expect from 'expect';
import {authorsFormattedForDropDown} from './selectors';
import {getCourseById} from './selectors';

describe ('Author Selectors', () => {
    describe('authorsFormattedForDropdown', () => {

        it('should return author data formatted for use in a dropdown', () => {
            const authors = [
                {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
                {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
            ];
            const expected = [
                {value: 'cory-house', text: 'Cory House'},
                {value: 'scott-allen', text: 'Scott Allen'}
            ];
            expect(authorsFormattedForDropDown(authors)).toEqual(expected);
        });
    });
});

describe ('Course Selectors', () => {
    describe('getCourseById', () => {
        it('should return course by id', () => {
            const courses = [
               {id: '1', watchHref: '', title: 'My Course 1', authorId: '1', length: '', category: ''},
               {id: '2', watchHref: '', title: 'My Course 2', authorId: '2', length: '', category: ''},
               {id: '3', watchHref: '', title: 'My Course 3', authorId: '3', length: '', category: ''}               
            ];
            const expected = 
                {id: '2', watchHref: '', title: 'My Course 2', authorId: '2', length: '', category: ''}
            
            expect(getCourseById(courses, "2")).toEqual(expected);
        });

        it('should return null if none found', () => {
            const courses = [
               {id: '1', watchHref: '', title: 'My Course 1', authorId: '1', length: '', category: ''},
               {id: '2', watchHref: '', title: 'My Course 2', authorId: '2', length: '', category: ''},
               {id: '3', watchHref: '', title: 'My Course 3', authorId: '3', length: '', category: ''}               
            ];
            const expected = null;
            
            expect(getCourseById(courses, "7")).toEqual(expected);
        });

    });
});
