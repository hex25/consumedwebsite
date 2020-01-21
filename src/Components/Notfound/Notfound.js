import React from 'react';

import './Notfound.css';
import Navbar from '../Navbar/Navbar';


class Notfound extends React.Component {

    render() {

        return (

            <div>
                <Navbar />

                <div>
                    <h1>Ooops! There is no such page</h1>
                </div>
            </div>
        )
    }


}

export default Notfound;