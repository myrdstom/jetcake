import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../../Loader';
import { compose } from 'redux';
import {  firestoreConnect } from 'react-redux-firebase';
import EditProfile from '../component/EditProfile';

class EditProfileView extends Component {
    state = {
        firstName: '',
        lastName: '',
        avatar: '',
        phone: '',
        address: '',
        dateOfBirth: '',
    };
    componentDidMount() {
        const { auth, profile } = this.props;

        if (auth && profile) {
            if (auth.email === profile.email) {
                this.setState({
                    id: profile.firstName,
                    firstName: profile.firstName,
                    lastName: profile.lastName,
                    avatar: profile.avatar || '',
                    phone: profile.phone || '',
                    address: profile.address || '',
                    dateOfBirth: profile.dateOfBirth || '',
                });
            }

        }
    }

    componentWillReceiveProps(nextProps) {
        const auth = nextProps.auth;
        const profile = nextProps.profile;
        if (auth && profile) {
            this.setState({
                firstName: profile.firstName,
                lastName: profile.lastName,
                avatar: profile.avatar || '',
                phone: profile.phone || '',
                address: profile.address || '',
                dateOfBirth: profile.dateOfBirth || '',
            });
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    mouseClick = () => {
        const { history } = this.props;
        window.cloudinary.openUploadWidget(
            {
                cloudName: 'dr8lvoqjj',
                api_key: '456553935284737',
                uploadPreset: 'gt2kahpt',
                cropping: true,
                folder: 'widgetdocs',
                sources: [
                    'local',
                    'url',
                    'camera',
                    'facebook',
                    'dropbox',
                    'search',
                    'instagram',
                ],
            },
            (error, result) => {
                if (result.event === 'success') {
                    let newImage = result.info.secure_url;
                    window.localStorage.setItem('newImage', newImage);
                    window.localStorage.setItem('image', newImage);
                    history.push(`/create-profile/${this.props.match.params.id}`);
                }
            },
        );
    };

    handleSubmit = e => {
        e.preventDefault();
        const { avatar} = this.props.profile;

        const profileData = {
            avatar: window.localStorage.getItem('newImage') || avatar,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            address: this.state.address,
            dateOfBirth: this.state.dateOfBirth,
        };
        const { firestore, history, profile } = this.props;
        firestore.update({collection:'profiles', doc: profile.id}, profileData).then(history.push('/profile'))
    };

    render() {
        const {  profile } = this.props;

        if (profile) {
            const {
                firstName,
                lastName,
                avatar,
                phone,
                address,
                dateOfBirth,
            } = this.state;

            return (
                <div>
                    <EditProfile
                        avatar={avatar}
                        firstName={firstName}
                        lastName={lastName}
                        phone={phone}
                        address={address}
                        dateOfBirth={dateOfBirth}
                        onMouseClick={this.mouseClick}
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                    />
                </div>
            );
        } else {
            return (
                <h1>
                    <Loader />
                </h1>
            );
        }
    }
}

EditProfileView.propTypes = {
    firestore: PropTypes.object.isRequired,
    profile: PropTypes.array,
    auth: PropTypes.object,
};

export default compose(
    firestoreConnect(props => [
        {collection: 'profiles', storeAs: 'profile', doc: props.match.params.id}
    ]),
    connect((state, props) => ({
        auth: state.firebase.auth,
        profile: state.firestore.ordered.profile && state.firestore.ordered.profile[0],
    })),
)(EditProfileView);
