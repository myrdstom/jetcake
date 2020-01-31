import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase';
import Registration from '../component/Registration';
import Footer from "../../Footer";

class RegistrationView extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        question1:'',
        question2:'',
        question3:'',
        answer1:'',
        answer2:'',
        answer3:'',
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    mouseClick = () => {
        const{history}=this.props;
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

        const { firstName, lastName, email, phone, question1, question2, question3, answer1, answer2, answer3 } = this.state;
        const registerUser = {
            firstName,
            lastName,
            email,
            phone,
            question1,
            question2,
            question3,
            answer1,
            answer2,
            answer3
        };

        const { firestore, firebase, history } = this.props;
        firebase
            .auth()
            .createUserWithEmailAndPassword(
                this.state.email,
                this.state.password,
            )
            .then(u => {})
            .then(u => {
                console.log(u);
            })
            .catch(error => console.log(error));
        firestore.add({ collection: 'profiles' }, registerUser).then(() => history.push('/'))

    };
    render() {
        const { firstName, lastName, email, phone, password, question1, question2, question3, answer1, answer2, answer3 } = this.state;
        return (
            <div>
                <Registration
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    phone={phone}
                    password={password}
                    question1={question1}
                    question2={question2}
                    question3={question3}
                    answer1={answer1}
                    answer2={answer2}
                    answer3={answer3}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    onMouseClick={this.mouseClick}
                />
            </div>
        );
    }
}

RegistrationView.propTypes = {
    firestore: PropTypes.object.isRequired,
    firebase: PropTypes.object.isRequired,
};

export default firestoreConnect()(RegistrationView);
