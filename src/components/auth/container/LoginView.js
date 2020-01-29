import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { firebaseConnect } from 'react-redux-firebase';
import Login from '../component/Login';

class LoginView extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { firebase } = this.props;

        const { email, password } = this.state;
        firebase
            .login({
                email,
                password,
            })
            .catch(err => alert('Invalid Login Credentials'));
    };
    render() {
        const { email, password } = this.state;
        return (
            <div>
                <Login
                    email={email}
                    password={password}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

LoginView.propTypes = {
    firebase: PropTypes.object.isRequired,
};

export default firebaseConnect()(LoginView);
