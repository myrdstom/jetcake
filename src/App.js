import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './firebase/store';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header/container/Header';
import LoginView from './components/auth/container/LoginView';
import RegistrationView from './components/auth/container/RegistrationView';
import EditProfileView from './components/profile/container/EditProfileView';
import GetProfileView from './components/profile/container/GetProfileView';
import Footer from './components/Footer';
import LandingPageView from "./components/LandingPage/container/LandingPageView";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header />
                    <ToastContainer autoClose={3000} />
                    <Switch>
                        <Route exact path="/" component={LandingPageView} />
                        <Route exact path="/login" component={LoginView} />
                        <Route
                            exact
                            path="/register"
                            component={RegistrationView}
                        />
                        <Route
                            exact
                            path="/profile"
                            component={GetProfileView}
                        />
                        <Route
                            exact
                            path="/create-profile/:id"
                            component={EditProfileView}
                        />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
