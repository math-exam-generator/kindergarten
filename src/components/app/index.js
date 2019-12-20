import React, {Component} from 'react';
import getRouter from '../../router';
import '../../assets/styles/app.scss';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                {getRouter()}
            </div>
        )
    }
}