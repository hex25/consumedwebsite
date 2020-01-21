import React from 'react';

import './Podcastitem.css';




class Podcastitem extends React.Component {

    render() {
        
        return (
            <div className='podcast-item'>

            <iframe title='podcast-item' width="260px" height="260px" scrolling="no" frameborder="no" allow="autoplay" src={this.props.embedUrl}></iframe>
            </div>
        )
    }


}

export default Podcastitem;