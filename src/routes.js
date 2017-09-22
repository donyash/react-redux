import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import ProductsPage from './components/product/ProductsPage';
import LogInPage from './components/common/LoginPage';
import ManageProductPage from './components/product/ManageProductPage'; //eslint-disable-line import/no-named-as-default
import DashboardPage from './components/dashboard/DashboardPage';

export default(

    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/login" component={LogInPage} />
        <Route path="dashboard" component={DashboardPage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course" component={ManageCoursePage} 
               onEnter={requireAuth}/>
        <Route path="course/:id" component={ManageCoursePage}
               onEnter={requireAuth} />
        <Route path="about" component={AboutPage} />
        <Route path="products" component={ProductsPage} />
        <Route path="product" component={ManageProductPage}  
               onEnter={requireAuth} /> 
        <Route path="product/:id" component={ManageProductPage} 
               onEnter={requireAuth} />
    </Route>
);

function requireAuth(nextState, replace) {  
    if (!sessionStorage.jwt) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  }