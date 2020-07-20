import React from 'react';
import './Navbar.css';
import consumedlogo from '../../Static/consumedlogowhite2.png';
import { Link } from 'react-router-dom';
import NavbarButton from '../NavbarButton/NavbarButton';
import NavbarLinks from '../NavbarLinks/NavbarLinks';



class Navbar extends React.Component {


    render() {
        return (
            
            <div id='navbar'>
                <Link to='/'><img id='consumed-logo' src={consumedlogo} alt='logo' /></Link>
                <NavbarLinks />
                <NavbarButton />
            </div>
        )
    }
}

export default Navbar;