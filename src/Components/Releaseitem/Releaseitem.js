import React from 'react';
import './Releaseitem.css';
import bpicon from './icons/bpiconlight.png';
import scicon from './icons/sciconlight.png';
import apicon from './icons/appleiconlight.png';
import sficon from './icons/spotifyiconlight.png';
//import dzicon from './icons/deezericonlight.png';


class Releaseitem extends React.Component {
    

    render() {


        return(
            <div className='release-card'>
                <div className='release-hover'>
                
                <a href={this.props.beatporturl}><img className='small-icon' src={bpicon} alt='beatport icon'/></a>
                <a href={this.props.soundcloudurl}><img className='small-icon' src={scicon} alt='soundcloud icon'/></a>
                {/*<a href={this.props.deezerurl}><img className='icon' src={dzicon} alt='deezer icon'/></a>  */}
                <a href={this.props.spotifyurl}><img className='icon' src={sficon} alt='spotify icon'/></a>
                <a href={this.props.appleurl}><img className='icon' src={apicon} alt='apple icon'/></a>

                <h3 className='artist-name'>{this.props.artist}</h3>
                <br />
                <a  className='title' href={'./#/'+ this.props.id}><h2>{this.props.name}</h2></a>
                
                </div>
                <img className='release-cover' src={this.props.imageurl} alt='cover' />
            </div>
        )

    }

}

export default Releaseitem;