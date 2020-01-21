import React from 'react';
import Pressitem from '../Pressitem/Pressitem';
import './Presslist.css';
import Navbar from '../Navbar/Navbar';
import articles from '../../Databases/PressDatabase';
//import releases from '../../Databases/ReleasesDatabase';
import Footer from '../Footer/Footer';


class Presslist extends React.Component {

    render() {

        return (

            <div>
                <Navbar />
                <div className='news-list'>
                    <h2 className='section-header'>+Latest articles.</h2>
                    { articles.map( article => { return(<Pressitem title={article.title} coverUrl={article.coverUrl} articleUrl={article.articleUrl} releaseid={article.releaseid}/>)})}
                    
                    
                </div>
                <Footer />
            </div>
        )
    }
}

export default Presslist;