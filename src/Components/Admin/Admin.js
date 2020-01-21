import React from 'react';

import './Admin.css';
import AdminNavbar from '../AdminNavbar/AdminNavbar';


class Admin extends React.Component {

    render() {

        return (
            <div>
            <AdminNavbar />
            <div id="new-release">
            <br />
                <br />
                <br />
                <h2 class="submit-title">Submit new release</h2>
                <form onSubmit={this.handleSubmit}>
                    <p><label>Name:<input type="text" /></label></p>
                    <p><label>Artist:<input type="text" /></label></p>
                    <p><label>Date:<input type="date"/></label></p>
                    <p><label>Release ID:<input type="text"/></label></p>
                    <p><label>Genre:<input type="text"/></label></p>
                    <p><label>Image URL:<input type="url"/></label></p>
                    <p><label>Beatport URL:<input type="url"/></label></p>
                    <p><label>Spotify URL:<input type="url"/></label></p>
                    <p><label>Deezer URL:<input type="url"/></label></p>
                    <p><label>Apple URL:<input type="url"/></label></p>
                    <p><label>Soundcloud URL:<input type="url"/></label></p>
                    <p><label>Embed URL 1:<input type="url"/></label></p>
                    <p><label>Embed URL 2:<input type="url"/></label></p>
                    <p><label>Embed URL 3:<input type="url"/></label></p>
                    <p><label>Embed URL 4:<input type="url"/></label></p>
                    <p><label>Embed URL 5:<input type="url"/></label></p>
                    <p><label>Embed URL 6:<input type="url"/></label></p>
                    <p><label>Embed URL 7:<input type="url"/></label></p>
                    <p><label>Embed URL 8:<input type="url"/></label></p>
                    <p><label>Embed URL 9:<input type="url"/></label></p>
                    <p><label>Embed URL 10:<input type="url"/></label></p>
                    <p><input type="submit" value="Submit" /></p>
                </form>
            </div>
            </div>
        )
    }


}

export default Admin;