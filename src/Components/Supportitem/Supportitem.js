import React from 'react';
import {Link} from 'react-router-dom';

import './Supportitem.css';


class Supportitem extends React.Component {

    render() {

        if (this.props.coverUrl !== '') {

        
            return (
         
                <div className='support-item'>
                   <img className='support-cover' src={this.props.coverUrl} alt='support cover' />
                  <p className='support-title'>{this.props.title}</p>

                  <Link to={'./'+ this.props.releaseid} className='release-button'>release page</Link>
                   
               </div>
              
           )
            }

        else {
            return (
                <div className='support-item'>
                   
                   <iframe title="embedsupport" width="230" height="200" src={this.props.embedUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <p className='support-title'>{this.props.title}</p>

                  <Link to={'./'+ this.props.releaseid} className='release-button'>release page</Link>
                   
               </div>
            )
        }
        
        
    }


}

export default Supportitem;