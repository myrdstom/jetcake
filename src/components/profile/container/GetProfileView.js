import React, {Component} from 'react';
import ViewProfile from "../component/ViewProfile";
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from "react-redux";
import {firestoreConnect, firebaseConnect} from "react-redux-firebase";
import Loader from "../../Loader";


class GetProfileView extends Component {
    state = {
        id:'',
        firstName:'',
        lastName:'',
        email:'',
        avatar:'',
        phone:'',
        address:'',
        dateOfBirth: ''
    }
    componentDidMount() {
        const {auth, profiles}=this.props;

        if(auth && profiles){

            for(let i=0; i <profiles.length; i++) {
                if(auth.email === profiles[i].email){
                    this.setState({
                        id: profiles[i].id,
                        firstName: profiles[i].firstName,
                        lastName:profiles[i].lastName,
                        avatar: profiles[i].avatar,
                        email: profiles[i].email,
                        phone:profiles[i].phone || '',
                        address:profiles[i].address || '',
                        dateOfBirth: profiles[i].dateOfBirth || ''
                    })
                }
            }

        }
    }

    componentWillReceiveProps(nextProps) {
        const auth =nextProps.auth;
        const profile = nextProps.profiles;
        if(auth && profile){

            for(let i=0; i <profile.length; i++) {
                if(auth.email === profile[i].email){
                    this.setState({
                        id: profile[i].id,
                        firstName: profile[i].firstName,
                        lastName:profile[i].lastName,
                        avatar: profile[i].avatar,
                        email: profile[i].email,
                        phone:profile[i].phone || '',
                        address:profile[i].address || '',
                        dateOfBirth: profile[i].dateOfBirth || ''
                    })
                }
            }

        }
    }
    render() {
        const {profiles} = this.props;
        const{auth}=this.props;

        if(profiles) {
            const {firstName, lastName, email, avatar, phone, address, dateOfBirth,id} = this.state;
            return (
                <div>
                    <ViewProfile
                        id={id}
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        avatar={avatar}
                        phone={phone}
                        address={address}
                        dateOfBirth={dateOfBirth}
                    />

                </div>
            );
        } else {
            return (
                <h1><Loader/></h1>
            )
        }
    }
}

GetProfileView.propTypes = {
    firestore: PropTypes.object.isRequired,
    users: PropTypes.array
};

export default compose(
    firestoreConnect([{collection:'profiles'}]),
    connect((state, props) => ({
        profiles: state.firestore.ordered.profiles
    })),
    firebaseConnect(),
    connect((state, props) => ({
        auth: state.firebase.auth,
    }))
)(GetProfileView);
