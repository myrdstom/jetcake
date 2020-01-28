import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../../Loader';
import { compose } from 'redux';
import {firebaseConnect, firestoreConnect} from 'react-redux-firebase';
import Login from "../component/Login";


class LoginView extends Component {
    render() {
        return (
            <div className="Login_Page">
                <Login/>
            </div>
        );
    }
}

LoginView.propTypes = {
    firebase: PropTypes.object.isRequired
};

export default firebaseConnect(

)(LoginView);
