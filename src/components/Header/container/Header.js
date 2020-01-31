import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import ViewHeader from '../component/ViewHeader';

export class Header extends Component {
    state = {
        isAuthenticated: false,
    };

    componentDidMount() {
        const {auth} = this.props;
        console.log(auth, 'the auth');
    }


    componentWillReceiveProps(nextProps) {
        const {auth} = this.props;
        if(auth){
            this.setState({isAuthenticated: true})

        } else{
            this.setState({isAuthenticated: false})
        }
    }

    onLogoutClick = e => {
        e.preventDefault();
        const {firebase}=this.props;
        firebase.logout();
    };
    render() {
        const {isAuthenticated} = this.state;
        const {auth}= this.props;
        return (
            <div>
                <ViewHeader
                    isAuthenticated={isAuthenticated}
                    onLogoutClick={this.onLogoutClick}
                />
            </div>
        );
    }
}

Header.propTypes = {
    firebase: PropTypes.object.isRequired,
    auth: PropTypes.object
};

export default compose(
    firebaseConnect(),
    connect((state, props) => ({
        auth: state.firebase.auth,
    })),
)(Header);
