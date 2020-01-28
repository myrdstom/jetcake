import React, {Component} from 'react';
import ViewProfile from "../component/ViewProfile";

class GetProfileView extends Component {
    render() {
        const profile = {
            id: '43565424',
            firstName:'Paul',
            lastName:'Nsereko',
            email:'nserekopaul@gmail.com',
            avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSVWuCurkB8xwYNcygqZlUPJdUvmfCoOiyQZk1L74c6cX-6Boq',
            phone:'+256776669099',
            address:'Plot 65 Ggaba Road, Kampala Uganda',
            dateOfBirth:'13-04-2020'
        }
        return (
            <div>
                <ViewProfile
                    profile={profile}
                />

            </div>
        );
    }
}

GetProfileView.propTypes = {};

export default GetProfileView;