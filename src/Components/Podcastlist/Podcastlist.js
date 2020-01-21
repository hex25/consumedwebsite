import React from 'react';

import './Podcastlist.css';
import Podcastitem from '../Podcastitem/Podcastitem';
import Navbar from '../Navbar/Navbar';
import podcasts from '../../Databases/PodcastsDatabase'
import Footer from '../Footer/Footer';


class Podcastlist extends React.Component {

    render() {

        return (

            <div>
                <Navbar />

                <div className='podcast-list'>
                <h2 className='section-header'>+Live recordings.</h2>

                    { podcasts.map( podcast => { return (<Podcastitem embedUrl={podcast.embedUrl} />)})}

                </div>
                <Footer />
            </div>
        )
    }


}

export default Podcastlist;