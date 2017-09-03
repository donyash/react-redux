import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';
import {authorsFormattedForDropDown} from '../../selectors/selectors';
import {getCourseById} from '../../selectors/selectors';

export class ManageCoursePage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            saving: false  //Ok to set state directly here
        };
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.course.id != nextProps.course.id){
            //necessary to populate form when existing course is loaded directly
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }
    //handles all form fields
    updateCourseState(event){
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    courseFormIsValid(){
        let formIsValid = true;
        let errors = {};

        if(this.state.course.title.length < 5){
            errors.title = 'Title must be at least 5 characters.';
            formIsValid = false;

            this.setState({errors: errors});
        }
        return formIsValid;
    }


    saveCourse(event){
        event.preventDefault();

        if(!this.courseFormIsValid()){
            return;
        }

        this.setState({saving: true});   //Ok to set state directly here
        this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirect())
        .catch(error =>{
            toastr.error(error);
            this.setState({saving: false});
        });
    }
    redirect(){
        this.setState({saving: false});
        toastr.success('Course saved');
        this.context.router.push('/courses');
    }


    render() {
        return (
             <CourseForm 
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                course={this.state.course} 
                errors={this.state.errors}
                saving={this.state.saving}
                />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    errors: React.PropTypes.object    //added
};
ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

//refactored to ../../selectors/selectors.js
// function getCourseById(courses, id){
//     const course = courses.filter(course => course.id == id);
//     if(course.length) return course[0];
//     return null;
// }
function mapStateToProps (state, ownProps) {
    const courseId = ownProps.params.id;  //from the path '/course/:id'
    let course={id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
    //debugger;

    if(courseId && state.courses.length > 0){
        course = getCourseById(state.courses, courseId);
    }
   
    return {
        course: course,
        authors: authorsFormattedForDropDown(state.authors)
    };
}

function mapDispatchToProps(dispatch)  {
    return {
        actions: bindActionCreators(courseActions, dispatch)
        };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);