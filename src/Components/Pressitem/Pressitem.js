import React from 'react';
import {Link} from 'react-router-dom';
import './Pressitem.css';


class Pressitem extends React.Component {

    render() { 

        return (
            <div className='press-item'>
                <img className='press-cover' src={this.props.coverUrl} alt='cover'/>
                <a href={this.props.articleUrl} className='article-title' target="_blank" rel="noopener noreferrer">{this.props.title}</a>
                <Link to={'./'+ this.props.releaseid} className='release-button'>release page<span className='arrow'> >></span></Link>
                
            </div>
        )
    }
}

export default Pressitem;