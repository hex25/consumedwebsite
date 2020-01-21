import React from 'react';
import Merchitem from '../Merchitem/Merchitem';
import './Merchshop.css';
import Navbar from '../Navbar/Navbar';
import products from '../../Databases/MerchDatabase';
import Footer from '../Footer/Footer';


class Merchshop extends React.Component {

    render() {

        return (

            <div>
                <Navbar />

                <div className='news-list'>
                    <h2 className='section-header'>+Hot merch.</h2>
                    { products.map(product => { return (<Merchitem imageUrl={product.imageUrl} />) } ) }
                </div>
                <Footer />
            </div>
        )
    }
}

export default Merchshop;