/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import {loadProducts} from './actions/productActions';
import {getUserToken} from './actions/profileActions';


import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadProducts());
store.dispatch(getUserToken());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);
