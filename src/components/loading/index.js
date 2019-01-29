import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class Loading extends Component {
    render() {
        return (
            <div className="wrapper d-flex justify-content-center align-items-center"><CircularProgress size={50}  /></div>
        )
    }
}