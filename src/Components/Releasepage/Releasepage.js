import React from 'react';

import './Releasepage.css';
import Navbar from '../Navbar/Navbar';
import SupportWidget from '../SupportWidget/SupportWidget';
import PressWidget from '../PressWidget/PressWidget';
import releases from '../../Databases/ReleasesDatabase';
import supports from '../../Databases/SupportDatabase';
import articles from '../../Databases/PressDatabase';
import bpicon from '../Releaseitem/icons/bpiconlight.png';
import scicon from '../Releaseitem/icons/sciconlight.png';
import apicon from '../Releaseitem/icons/appleiconlight.png';
import sficon from '../Releaseitem/icons/spotifyiconlight.png';
//import dzicon from '../Releaseitem/icons/deezericonlight.png';


class Releasepage extends React.Component {


    render() {


        let index = String(window.location.href.match(/CSMD[0-9]+/g));
        let release = releases.find(o => o.id === index);

        let releaseSupports = [];
        for (var i = 0; i < supports.length; i++) {
            if (supports[i].releaseid === release.id) {
                releaseSupports.push(supports[i]);
            }
        }
        let releaseArticles = [];
        for (var j = 0; j < articles.length; j++) {
            if (articles[j].releaseid === release.id) {
                releaseArticles.push(articles[j]);
            }
        }

        return (
            <div>

                <Navbar />
                <div className='release-page-container'>
                    <p>{release.id}</p>
                    <h2 className='section-header'>{release.artist} - {release.name}</h2>
                    <div id='release-container'>
                        <img id='release-cover' src={release.imageurl} alt='release cover' />
                        <div id='icons-container'>
                        <p><iframe title="scembedlink1" width="600px" height="20" scrolling="no" frameBorder="no" allow="autoplay" src={release.embedurl1}></iframe></p>
                    <p><iframe title="scembedlink2" width="600px" height="20" scrolling="no" frameBorder="no" allow="autoplay" src={release.embedurl2}></iframe></p>
                    <p><iframe title="scembedlink3" width="600px" height="20" scrolling="no" frameBorder="no" allow="autoplay" src={release.embedurl3}></iframe></p>
                    <p><iframe title="scembedlink4" width="600px" height="20" scrolling="no" frameBorder="no" allow="autoplay" src={release.embedurl4}></iframe></p>
                    <p><iframe title="scembedlink5" width="600px" height="20" scrolling="no" frameBorder="no" allow="autoplay" src={release.embedurl5}></iframe></p>
                    <p><iframe title="scembedlink6" width="600px" height="20" scrolling="no" frameBorder="no" allow="autoplay" src={release.embedurl6}></iframe></p>
                    <p><iframe title="scembedlink7" width="600px" height="20" scrolling="no" frameBorder="no" allow="autoplay" src={release.embedurl7}></iframe></p>
                    <p><iframe title="scembedlink8" width="600px" height="20" scrolling="no" frameBorder="no" allow="autoplay" src={release.embedurl8}></iframe></p>
                    <p><iframe title="scembedlink8" width="600px" height="20" scrolling="no" frameBorder="no" allow="autoplay" src={release.embedurl9}></iframe></p>
                    <p><iframe title="scembedlink10" width="600px" height="20" scrolling="no" frameBorder="no" allow="autoplay" src={release.embedurl10}></iframe></p>
                    <p><iframe title="scembedlink7" width="600px" height="20" scrolling="no" frameBorder="no" allow="autoplay" src={release.embedurl11}></iframe></p>
                    <p><iframe title="scembedlink8" width="600px" height="20" scrolling="no" frameBorder="no" allow="autoplay" src={release.embedurl12}></iframe></p>
                    <p><iframe title="scembedlink8" width="600px" height="20" scrolling="no" frameBorder="no" allow="autoplay" src={release.embedurl13}></iframe></p>
                    <p><iframe title="scembedlink10" width="600px" height="20" scrolling="no" frameBorder="no" allow="autoplay" src={release.embedurl14}></iframe></p>

                            
                        </div>
                    </div>
                    <h3>Stream on your preferred plarform : </h3>
                            <p>
                                <a href={release.spotifyurl}><img className='icon-release-page' src={sficon} alt='spotify icon' /></a>
                                <a href={release.beatporturl}><img className='icon-release-page-small' src={bpicon} alt='beatport icon' /></a> 
                                <a href={release.soundcloudurl}><img className='icon-release-page-small' src={scicon} alt='soundcloud icon' /></a>
                                {/* <a href={release.deezerurl}><img className='icon-release-page' src={dzicon} alt='deezer icon' /></a> */}
                                <a href={release.appleurl}><img className='icon-release-page' src={apicon} alt='apple icon' /></a>
                            </p>  
                            {releaseSupports.map( support => { return (<SupportWidget title={support.title} info={support.shortInfo} embedUrl={support.embedUrl} coverUrl={support.coverUrl} releaseid={support.releaseid} />)}
                )}  
                 {releaseArticles.map( article => { return (<PressWidget title={article.title} info={article.shortInfo} articleUrl={article.articleUrl} coverUrl={article.coverUrl} releaseid={article.releaseid} />)}
                )}  

                </div>
                
               
                
                
            </div>
        )
    }


}

export default Releasepage;

