import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/container/Header';
import LoginView from './components/auth/container/LoginView';
import RegistrationView from './components/auth/container/RegistrationView';
import EditProfileView from './components/profile/container/EditProfileView';
import GetProfileView from './components/profile/container/GetProfileView';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/login" component={LoginView} />
                    <Route
                        exact
                        path="/register"
                        component={RegistrationView}
                    />
                    <Route exact path="/profile" component={GetProfileView} />
                    <Route
                        exact
                        path="/create-profile"
                        component={EditProfileView}
                    />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
