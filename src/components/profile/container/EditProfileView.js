import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../../Loader';
import { compose } from 'redux';
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase';
import EditProfile from '../component/EditProfile';

class EditProfileView extends Component {
    state = {
        firstName: '',
        lastName: '',
        avatar:'',
        phone: '',
        address: '',
        dateOfBirth: '',
    };
    componentDidMount() {
        const { auth, profiles } = this.props;

        if (auth && profiles) {
            for (let i = 0; i < profiles.length; i++) {
                if (auth.email === profiles[i].email) {
                    this.setState({
                        firstName: profiles[i].firstName,
                        lastName: profiles[i].lastName,
                        avatar:profiles[i].avatar || '',
                        phone: profiles[i].phone || '',
                        address: profiles[i].address || '',
                        dateOfBirth: profiles[i].dateOfBirth || '',
                    });
                }
            }
        }
    }


    componentWillReceiveProps(nextProps) {
        const auth = nextProps.auth;
        const profile = nextProps.profiles;
        if (auth && profile) {
            for (let i = 0; i < profile.length; i++) {
                if (auth.email === profile[i].email) {
                    this.setState({
                        firstName: profile[i].firstName,
                        lastName: profile[i].lastName,
                        avatar:profile[i].avatar || '',
                        phone: profile[i].phone || '',
                        address: profile[i].address || '',
                        dateOfBirth: profile[i].dateOfBirth || '',
                    });
                }
            }
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
                    history.push('/create-profile');
                }
            },
        );
    };

    handleSubmit = e => {
        e.preventDefault();

        const profileData = {
            avatar:
                window.localStorage.getItem('newImage'),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            address: this.state.address,
            dateOfBirth: this.state.dateOfBirth
        };
        const { firestore, history } = this.props;

    };

    render() {
        const { profiles } = this.props;
        if (profiles) {
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
    users: PropTypes.array,
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
)(EditProfileView);
