import React, { Component } from 'react';
import ViewHeader from "../component/ViewHeader";

export class Header extends Component {
    componentDidMount() {
    }

    onLogoutClick = e => {

    };
    render() {
        return (
            <div>
                <ViewHeader
                    isAuthenticated={false}
                    onLogoutClick = {this.onLogoutClick}
                />
            </div>
        );
    }
}

Header.propTypes = {

};

export default Header;