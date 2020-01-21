import React from 'react';
import './Releaselist.css';
import releases from '../../Databases/ReleasesDatabase'
import Releaseitem from '../Releaseitem/Releaseitem'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
//import Releasefilter from '../Releasefilter/Releasefilter';



class Releaselist extends React.Component {

    constructor(props) {
        super(props);
        this.filterReleases = this.filterReleases.bind(this);
    }

    filterReleases(array, genre){
        let filtered = array.filter( item => item.genre === genre );
        return filtered;
    }

    render() {

        return (
            <div>
                <Navbar />
            
            <div className='catalogue'>
            
            <h2 className='section-header'>+Consumed Music Catalogue.</h2>
            <br />
        { //<Releasefilter onClick={this.filterReleases(releases, 'melodic techno')} releasesList={releases} genre='melodic techno' /> 
        }
            { 
            releases.map( release => { return (<Releaseitem id={release.id} imageurl={release.imageurl} beatporturl={release.beatporturl} deezerurl={release.deezerurl} spotifyurl={release.spotifyurl} appleurl={release.appleurl} soundcloudurl={release.soundcloudurl} artist={release.artist} name={release.name} />) } )}
        
            </div>
            <Footer />
            </div>

        )
    }
}

export default Releaselist;