import React from 'react';
import './Navbar.css';
import consumedlogo from '../../Static/consumedlogowhite2.png';

import {Link} from 'react-router-dom';



class Navbar extends React.Component {

    render() {
        return (
            <div className='navbar'>
                <Link to='/'><img className='consumed-logo' src={consumedlogo} alt='logo' /></Link>
                
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

export default Navbar;