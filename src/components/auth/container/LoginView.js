import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { toast } from 'react-toastify';
import Login from '../component/Login';
import { notifyUser } from '../../../redux/actions/notifyActions';

class LoginView extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { firebase, notifyUser, history } = this.props;

        const { email, password } = this.state;
        firebase
            .login({
                email,
                password,
            }).then(() =>{
                history.push('/profile')
        })

            .catch(err => toast.error('Invalid Login Credentials!'));
    };
    render() {
        const { email, password } = this.state;
        const { message, messageType } = this.props.notify;
        return (
            <div>
                <Login
                    email={email}
                    message={message}
                    messageType={messageType}
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
    notify: PropTypes.object.isRequired,
    notifyUser: PropTypes.func.isRequired,
};

export default compose(
    firebaseConnect(),
    connect(
        (state, props) => ({
            notify: state.notify,
        }),
        { notifyUser },
    ),
)(LoginView);
