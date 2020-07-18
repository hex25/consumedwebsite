import React from 'react';

import '../Supportitem/Supportitem';
import './Supportlist.css';
import Supportitem from '../Supportitem/Supportitem';
import Navbar from '../Navbar/Navbar';
import supports from '../../Databases/SupportDatabase';
import Footer from '../Footer/Footer'; 


class Supportlist extends React.Component {

    render() {

        return(

            <div>
                <Navbar />

            <div className='support-list'>
                <h2 className='section-header'>+Recent support.</h2>
                
                {supports.map( support => { return (<Supportitem title={support.title} embedUrl={support.embedUrl} coverUrl={support.coverUrl} releaseid={support.releaseid} />)}
                )}             
            </div>
            <Footer />
            </div>
        )
    }

}

export default Supportlist;