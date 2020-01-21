import React from 'react';
import './Samplepack.css';
import playIcon from '../../Static/play-button.png';
import downloadIcon from '../../Static/download-button.png';



class Samplepack extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onChildClick(event.target.style); 
      }

    render() {

        return (
        

            <div className='sample-card'>
                <div className='hover-card'>
                    <img src={playIcon} onClick={this.handleClick} alt={this.props.title} style={this.props.pack} />
                    <img src={downloadIcon} className='download-icon' alt='download icon' title='PayPal Checkout' />
                </div>
                <img src={this.props.imageUrl} className='sample-cover' alt='sample cover' />
                
            </div>
            
        )
    }
}

export default Samplepack;