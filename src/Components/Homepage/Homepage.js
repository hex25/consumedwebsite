import React from 'react';
import {Link} from 'react-router-dom';

import './Homepage.css';
import Navbar from '../Navbar/Navbar';
import releases from '../../Databases/ReleasesDatabase';
//import packs from '../../Databases/PacksDatabase';
import supports from '../../Databases/SupportDatabase';
import podcasts from '../../Databases/PodcastsDatabase';
//import merchitems from '../../Databases/MerchDatabase';
import articles from '../../Databases/PressDatabase';
import Releaseitem from '../Releaseitem/Releaseitem';
//import Merchitem from '../Merchitem/Merchitem';
//import Samplepack from '../Samplepack/Samplepack';
import Player from '../Player/Player';
import Podcastitem from '../Podcastitem/Podcastitem';
import Pressitem from '../Pressitem/Pressitem';
import Supportitem from '../Supportitem/Supportitem';


class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style: { display: 'none' },
        };

        this.loadPack = this.loadPack.bind(this);
        this.closePlayer = this.closePlayer.bind(this);
    }


    loadPack(pack) {
        this.setState({
            style: { display: 'block' },
            imageUrl: pack.imageUrl,
            title: pack.title,
        })
    }

    closePlayer() {
        this.setState({ style: { display: 'none' }, })
    }

    render() {

        let releasesHighlight = releases.slice(0, 3);
        let podcastsHighlight = podcasts.slice(0, 3);
        //let packsHighlight = packs.slice(0, 3);
        let supportsHighlight = supports.slice(0, 3);
        //let merchitemsHighlight = merchitems.slice(0, 3);
        let articlesHighlight = articles.slice(0, 3);

        return (
            <div>

                <Navbar />
                <div id='homepage-container'>
                <section className='container'>
                    <div className='section-header'>
                        +Latest Releases. </div>

                     <div>
                            {releasesHighlight.map(release => { return (<Releaseitem id={release.id} imageurl={release.imageurl} beatporturl={release.beatporturl} deezerurl={release.deezerurl} spotifyurl={release.spotifyurl} appleurl={release.appleurl} soundcloudurl={release.soundcloudurl} artist={release.artist} name={release.name} />) })}
                        
                    </div>
                    <Link to='/releases' className='link-viewall'>view more <span className='arrow'>>></span></Link>
                <hr />
                </section>
                {/* <section className='container'>
               <div className='section-header'>
                        +Fresh Soundpacks. </div>
                        <div>
                        {
                        packsHighlight.map(pack => {
                            return <Samplepack onChildClick={this.loadPack} pack={pack} imageUrl={pack.imageUrl} title={pack.title} soundUrl={pack.soundUrl} downloadLink={pack.downloadLink} />
                        })
                    }
                        
                        </div>
                        <Link to='/soundpacks' className='link-viewall'>view more <span className='arrow'>>></span></Link>

                <hr />
                </section> */}
                <section className='container'>
                    <div className='section-header'>
                        +Fresh Podcasts.  </div>
                        <div>
                        { podcastsHighlight.map( podcast => { return (<Podcastitem embedUrl={podcast.embedUrl} />)})}

                        </div>
                       
                        <Link to='/podcasts' className='link-viewall'>view more <span className='arrow'>>></span></Link>

                <hr />
                </section>
                <section className='container'>
                    <div className='section-header'>
                        +Latest Articles. </div>
                        <div>
                        { articlesHighlight.map( article => { return(<Pressitem title={article.title} coverUrl={article.coverUrl} articleUrl={article.articleUrl} releaseid={article.releaseid} />)})}

                        
                        </div>
                        <Link to='/press' className='link-viewall'>view more <span className='arrow'>>></span></Link>

                <hr />
                </section>
                <section className='container'>
                    <div className='section-header'>
                        +Recent Support. </div>
                        <div>
                        {supportsHighlight.map( support => { return (<Supportitem title={support.title} embedUrl={support.embedUrl} coverUrl={support.coverUrl} releaseid={support.releaseid}/>)}
                )}  
                        

                        </div>
                        <Link to='/support' className='link-viewall'>view more <span className='arrow'>>></span></Link>

                <hr />
                </section>
                {/*
                <section className='container'>
                    <div className='section-header'>
                        +Hot Merch. </div>
                        <div>

                        { merchitemsHighlight.map(product => { return (<Merchitem imageUrl={product.imageUrl} />) } ) }

                        

                        </div>
                        <Link to='/merchandise' className='link-viewall'>view more <span className='arrow'>>></span></Link>

                <hr />
                </section> */}

                <Player imageUrl={this.state.imageUrl} title={this.state.title} style={this.state.style} onClick={this.closePlayer} />
                </div>
            </div>
        )
    }


}

export default Homepage;