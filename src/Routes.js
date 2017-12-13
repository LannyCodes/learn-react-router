/**
 * Created by Lanny on 2017/12/13.
 */
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import {syncHistoryWithStore} from 'react-router-redux';
import App from './pages/App.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import NotFound from './pages/NotFound.js';
import store from './Store.js';

const createElement = (Component, props) => {
    return (
        <Provider store={store}>
            <Component {...props}/>
        </Provider>
    )
};
const history = syncHistoryWithStore(browserHistory, store);
const Routes = () => (
    <Router history={history} createElement={createElement}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='home' component={Home}/>
            <Route path='about' component={About}/>
            <Route path='*' component={NotFound}/>
        </Route>
    </Router>
);

export default Routes;