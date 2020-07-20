import React from 'react';
import './NavbarLinks.css';
import { Link } from 'react-router-dom';


class NavbarLinks extends React.Component {

    render() {
        return (
            <div id='navbar-links'>
            <Link to='/releases' className='link'>RELEASES</Link>
                { //   <Link to='/soundpacks' className='link'>SOUNDPACKS</Link> 
                }
                <Link to='/podcasts' className='link'>PODCASTS</Link>
                <Link to='/press' className='link'>PRESS</Link>
                <Link to='/support' className='link'>SUPPORT</Link>
                {//  <Link to='/merchandise' className='link'>MERCHANDISE</Link>
                }
                <Link to='/contact' className='link'>CONTACT</Link>
            </div>
        )
    }

}

export default NavbarLinks;