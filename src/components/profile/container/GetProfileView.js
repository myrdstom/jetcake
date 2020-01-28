import React, {Component} from 'react';
import ViewProfile from "../component/ViewProfile";
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import Loader from "../../Loader";


class GetProfileView extends Component {
    render() {
        const {profiles} = this.props;
        if(profiles) {

            const profile = {
                id: '43565424',
                firstName: profiles[0]['firstName'],
                lastName: profiles[0]['lastName'],
                email: profiles[0]['email'],
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSVWuCurkB8xwYNcygqZlUPJdUvmfCoOiyQZk1L74c6cX-6Boq',
                phone: profiles[0]['Phone Number'],
                address: profiles[0]['Address'],
                dateOfBirth: '13-04-2020'
            }
            return (
                <div>
                    <ViewProfile
                        profile={profile}
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
    }))
)(GetProfileView);
