import React from 'react';

import './Contact.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import MyForm from '../ContactForm/ContactForm';


class Contact extends React.Component {

    render() {
        
        return (
            <div>
            <Navbar />
            <MyForm />
            <Footer />
            </div>
        )
    }


}

export default Contact;