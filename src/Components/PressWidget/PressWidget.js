import React from 'react';

import './PressWidget.css';



class PressWidget extends React.Component {



    render() {
        
        return (

            <div id='support-widget-container'>
                    <p className='support-widget-title'>{this.props.title}</p>
                    <p className='support-widget-info'>{this.props.info}</p>
                    <a href={this.props.articleUrl}className='article-title' target="_blank" rel="noopener noreferrer"><img className='support-widget-cover' src={this.props.coverUrl} alt='support cover' /></a>
                    
                    
                    
               
           {/*<div className='press-item'>
                //<img className='press-cover' src={this.props.coverUrl} alt='cover'/>
                //<a href={this.props.articleUrl} className='article-title' target="_blank" rel="noopener noreferrer">{this.props.title}</a>
                
        */}
            </div>
        )
    }


}

export default PressWidget;