import React from 'react';
import './Releasefilter.css';


class Releasefilter extends React.Component {


    render(){

        return(
            <div>
                <div id='melodic-techno-button' onClick={this.props.onClick}>{this.props.genre}</div>
            </div>
        )
    }
}

export default Releasefilter;