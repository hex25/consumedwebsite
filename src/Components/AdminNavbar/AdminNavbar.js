import React from 'react';
import './AdminNavbar.css';
import consumedlogo from '../../Static/consumedlogowhite2.png';

import {Link} from 'react-router-dom';



class AdminNavbar extends React.Component {

    render() {
        return (
            <div className='navbar'>
                <Link to='/'><img className='consumed-logo' src={consumedlogo} alt='logo' /></Link>
                
                <Link to='/releases' className='link'>SUBMIT/EDIT RELEASE</Link>
             { //   <Link to='/soundpacks' className='link'>SUBMIT/EDIT SOUNDPACKS</Link> 
    }
                <Link to='/podcasts' className='link'>SUBMIT/EDIT PODCAST</Link>
                <Link to='/press' className='link'>SUBMIT/EDIT PRESS</Link>
                <Link to='/support' className='link'>SUBMIT/EDIT SUPPORT</Link>
              {//  <Link to='/merchandise' className='link'>SUBMIT/EDIT MERCHANDISE</Link>
    }
                
            </div>
        )
    }
}

export default AdminNavbar;