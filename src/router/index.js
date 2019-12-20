import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Home from '../containers/home';
import Page from '../containers/page';


export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/page" component={Page}/>
        </Switch>
    </div>
);
