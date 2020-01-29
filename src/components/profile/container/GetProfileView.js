import React, {Component} from 'react';
import ViewProfile from "../component/ViewProfile";
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from "react-redux";
import {firestoreConnect, firebaseConnect} from "react-redux-firebase";
import Loader from "../../Loader";


class GetProfileView extends Component {
    state = {
        firstName:'',
        lastName:'',
        email:'',
        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSVWuCurkB8xwYNcygqZlUPJdUvmfCoOiyQZk1L74c6cX-6Boq',
        phone:'',
        address:'',
        dateOfBirth: ''
    }

    componentWillReceiveProps(nextProps) {
        const auth =nextProps.auth;
        const profile = nextProps.profiles;
        if(auth&& profile){

            for(let i=0; i <profile.length; i++) {
                if(auth.email === profile[i].email){
                    console.log(auth.email);
                    console.log(profile[i].email,'the email from profile');
                    this.setState({
                        firstName: profile[i].firstName || '',
                        lastName:profile[i].lastName || '',
                        email: profile[i].email || '',
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
            const {firstName, lastName, email, avatar, phone, address, dateOfBirth} = this.state;
            return (
                <div>
                    <ViewProfile
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
