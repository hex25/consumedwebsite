import React from 'react';
import './Merchitem.css';

class Merchitem extends React.Component {

    render() {

        return (
            <div className='merch-item'>
                <img className='merch-cover' src={this.props.imageUrl} alt='merch' />
                
                <a href='/'>Get one --></a>
                
            </div>
        )
    }
}

export default Merchitem;