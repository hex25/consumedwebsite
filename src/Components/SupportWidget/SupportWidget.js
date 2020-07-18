import React from 'react';

import './SupportWidget.css';


class SupportWidget extends React.Component {

    render() {

        if (this.props.coverUrl !== '') {


            return (

                <div>
                    <p className='support-widget-title'>{this.props.title}</p>
                    <p className='support-widget-info'>{this.props.info}</p>
                    <img className='support-widget-cover' src={this.props.coverUrl} alt='support cover' />
                    
                    
                </div>

            )
        }

        else {
            return (
                <div>
                    <p className='support-widget-title'>{this.props.title}</p><br />
                    <p className='support-widget-info'>{this.props.info}</p>
                    <iframe title="embedsupport" width="230" height="200" src={this.props.embedUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    
                </div>
            )
        }


    }



}

export default SupportWidget;