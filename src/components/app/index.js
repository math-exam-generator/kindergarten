import React, {Component} from 'react';
import getRouter from 'router';
import 'styles/app.scss';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                {getRouter()}
            </div>
        )
    }
}