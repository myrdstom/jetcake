import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import { composeWithDevTools } from 'redux-devtools-extension';


//Reducers
import notifyReducer from "../redux/reducers/notifyReducer";

const firebaseConfig = {
    apiKey: 'AIzaSyD9I68JrMjGafhQByyihSWdnkY5ThfRh0k',
    authDomain: 'jetcake-94931.firebaseapp.com',
    databaseURL: 'https://jetcake-94931.firebaseio.com',
    projectId: 'jetcake-94931',
    storageBucket: 'jetcake-94931.appspot.com',
    messagingSenderId: '875949350235',
    appId: '1:875949350235:web:a00e041d20b8d474498e7e',
    measurementId: 'G-WE2MJ42X8F',
};

// react-redux-firebase-config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
export const firestore = firebase.firestore();

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase),
)(createStore);

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    notify: notifyReducer
});

// Initial State
const initialState={};

//Create store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    composeWithDevTools()
));

export default store;
