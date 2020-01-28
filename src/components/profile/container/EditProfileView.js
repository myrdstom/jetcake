import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../../Loader';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import EditProfile from '../component/EditProfile';

class EditProfileView extends Component {
    constructor() {
        super();
        this.state = {
            avatar: '',
            firstName: '',
            lastName: '',
            bio: '',
            errors: {},
        };
    }
    // componentDidMount() {
    //     if (!this.props.auth.isAuthenticated) {
    //         this.props.history.push('/');
    //     }
    // }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (!this.props.auth.isAuthenticated) {
    //         this.props.history.push('/');
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.errors) {
    //         this.setState({ errors: nextProps.errors }, () => {
    //             console.log(this.state.errors);
    //         });
    //     }
    //
    //     if (nextProps.profile.profile && nextProps.profile.loading === false) {
    //         const {
    //             firstName,
    //             lastName,
    //             bio,
    //             avatar,
    //         } = nextProps.profile.profile;
    //         this.setState({
    //             avatar,
    //             firstName,
    //             lastName,
    //             bio,
    //         });
    //     }
    // }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    mouseClick = () => {
        window.cloudinary.openUploadWidget(
            {
                cloudName: 'dr8lvoqjj',
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
                    window.location.reload();
                }
            },
        );
    };

    handleSubmit = e => {
        e.preventDefault();

        const profileData = {
            avatar:
                window.localStorage.getItem('newImage') || this.state.avatar,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            bio: this.state.bio,
        };
        const { createProfile, history } = this.props;

        createProfile(profileData, history);
    };

    render() {
        const { profiles } = this.props;
        if (profiles) {
            const profile = {
                id: profiles[0].id,
                firstName: profiles[0]['firstName'],
                lastName: profiles[0]['lastName'],
                email: profiles[0]['email'],
                avatar:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSVWuCurkB8xwYNcygqZlUPJdUvmfCoOiyQZk1L74c6cX-6Boq',
                phone: profiles[0]['Phone Number'],
                address: profiles[0]['Address'],
                dateOfBirth: '13-04-2020',
            };

            return (
                <div>
                    <EditProfile
                        avatar={profile.avatar}
                        firstName={profile.firstName}
                        lastName={profile.lastName}
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
    users: PropTypes.array,
};

export default compose(
    firestoreConnect([{ collection: 'profiles' }]),
    connect((state, props) => ({
        profiles: state.firestore.ordered.profiles,
    })),
)(EditProfileView);
