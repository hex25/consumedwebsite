import React from 'react';
import './Packslist.css';
import Samplepack from '../Samplepack/Samplepack';
import packs from '../../Databases/PacksDatabase';
import Player from '../Player/Player';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';



class Packslist extends React.Component {

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
        return (


            <div>
                <Navbar />

                <div className='packs-container'>
                    <h2 className='section-header'>+Fresh soundpacks.</h2>
                    {
                        packs.map(pack => {
                            return <Samplepack onChildClick={this.loadPack} pack={pack} imageUrl={pack.imageUrl} title={pack.title} soundUrl={pack.soundUrl} downloadLink={pack.downloadLink} />
                        })
                    }

                    <Player imageUrl={this.state.imageUrl} title={this.state.title} style={this.state.style} onClick={this.closePlayer} />


                </div>
                <Footer />
            </div>
        )
    }
}

export default Packslist;