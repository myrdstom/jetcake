import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase';

import ViewHeader from '../component/ViewHeader';

export class Header extends Component {
    state = {
        isAuthenticated: false,
        avatar: '',
    };

    componentDidMount() {
        const { auth, profiles } = this.props;
        if (auth && profiles) {
            for (let i = 0; i < profiles.length; i++) {
                if (auth.email === profiles[i].email) {
                    this.setState({
                        avatar: profiles[i].avatar || '',
                    });
                }
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        const { auth } = this.props;
        if (auth) {
            this.setState({ isAuthenticated: true });
        }
        const nextAuth =nextProps.auth;
        const profile = nextProps.profiles;
        if(nextAuth && profile){

            for(let i=0; i <profile.length; i++) {
                if(nextAuth.email === profile[i].email){
                    this.setState({
                        avatar: profile[i].avatar,
                    })
                }
            }

        }
    }

    onLogoutClick = e => {
        e.preventDefault();
        const { firebase } = this.props;
        firebase.logout();
    };
    render() {
        const { isAuthenticated, avatar } = this.state;
        const { auth } = this.props;
        return (
            <div>
                <ViewHeader
                    isEmpty={auth.isEmpty}
                    avatar={avatar}
                    isAuthenticated={isAuthenticated}
                    onLogoutClick={this.onLogoutClick}
                />
            </div>
        );
    }
}

Header.propTypes = {
    firebase: PropTypes.object.isRequired,
    auth: PropTypes.object,
};

export default compose(
    firestoreConnect([{ collection: 'profiles' }]),
    connect((state, props) => ({
        profiles: state.firestore.ordered.profiles,
    })),
    firebaseConnect(),
    connect((state, props) => ({
        auth: state.firebase.auth,
    })),
)(Header);
