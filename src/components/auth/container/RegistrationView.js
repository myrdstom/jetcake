import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase';
import Registration from '../component/Registration';
import { notifyUser } from '../../../redux/actions/notifyActions';
import { toast } from 'react-toastify';

class RegistrationView extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        address: '',
        question1: '',
        question2: '',
        question3: '',
        answer1: '',
        answer2: '',
        answer3: '',
        avatar: '',
        dateOfBirth: '',
    };
    componentDidMount() {
        localStorage.removeItem('image');
        localStorage.removeItem('newImage');
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    mouseClick = () => {
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
                }
                this.setState({
                    avatar: window.localStorage.getItem('newImage'),
                });
            },
        );
    };
    handleRegistration = e => {
        e.preventDefault();

        const {
            firstName,
            lastName,
            email,
            phone,
            address,
            question1,
            question2,
            question3,
            answer1,
            answer2,
            answer3,
            password,
            dateOfBirth,
        } = this.state;
        const registerUser = {
            avatar: window.localStorage.getItem('newImage'),
            firstName,
            lastName,
            email,
            phone,
            address,
            question1,
            question2,
            question3,
            answer1,
            answer2,
            answer3,
            dateOfBirth,
        };

        const { firestore, firebase, notifyUser, history } = this.props;

        if (!registerUser.avatar) {
            toast.error('The user needs a profile picture');
        } else {
            firebase
                .createUser({ email, password })
                .then(() => {
                    firestore
                        .add({ collection: 'profiles' }, registerUser)
                        .then(res => firebase.logout())
                        .then(res => history.push('/login'))
                        .catch(err => {
                            toast.error('The profile is cannot be created');
                        });
                })
                .catch(err =>
                    toast.error('A user with this email already exists'),
                );
        }
    };

    render() {
        const {
            firstName,
            lastName,
            email,
            phone,
            address,
            password,
            question1,
            question2,
            question3,
            answer1,
            answer2,
            answer3,
            dateOfBirth,
        } = this.state;
        const { message, messageType } = this.props.notify;
        return (
            <div>
                <Registration
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    phone={phone}
                    address={address}
                    dateOfBirth={dateOfBirth}
                    password={password}
                    question1={question1}
                    question2={question2}
                    question3={question3}
                    answer1={answer1}
                    answer2={answer2}
                    answer3={answer3}
                    message={message}
                    messageType={messageType}
                    onChange={this.handleChange}
                    onSubmit={this.handleRegistration.bind(this)}
                    onMouseClick={this.mouseClick}
                />
            </div>
        );
    }
}

RegistrationView.propTypes = {
    firestore: PropTypes.object.isRequired,
    firebase: PropTypes.object.isRequired,
    notify: PropTypes.object.isRequired,
    notifyUser: PropTypes.func.isRequired,
};

export default compose(
    firestoreConnect(),
    firebaseConnect(),
    connect(
        (state, props) => ({
            notify: state.notify,
        }),
        { notifyUser },
    ),
)(RegistrationView);
