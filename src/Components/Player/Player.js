import React from 'react';
import './Player.css';
import downloadIcon from '../../Static/download-button.png';


class Player extends React.Component {

    render() {
        return (
            <div className='player' style={this.props.style} >
                <img src={this.props.imageUrl} alt='cover' className='cover'/>
                <p className='player-title'>{this.props.title}</p>
                <audio controls source src={this.props.soundUrl} type="audio/mpeg"> Your browser does not support the audio element. </audio>
                <img src={downloadIcon} alt='download-icon' className='download-icon' />
                <span onClick={this.props.onClick}>X</span>
            </div>
        )
    }
}


export default Player;