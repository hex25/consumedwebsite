import React from 'react';
import '../Components/App/App.css';


import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Homepage from '../Components/Homepage/Homepage';
import Packslist from '../Components/Packslist/Packslist';
import Podcastlist from '../Components/Podcastlist/Podcastlist';
import Catalogue from '../Components/Releaselist/Releaselist';
import Notfound from '../Components/Notfound/Notfound';
import Presslist from '../Components/Presslist/Presslist';
import Supportlist from '../Components/Supportlist/Supportlist';
import Merchshop from '../Components/Merchshop/Merchshop';
import Releasepage from '../Components/Releasepage/Releasepage';
import releases from '../Databases/ReleasesDatabase';
import Admin from '../Components/Admin/Admin';
import Contact from '../Components/Contact/Contact';

class App extends React.Component {

    render() {
  return (
      <Router>
          <Switch>
 
        
        <Route exact path="/" component={Homepage} />
        <Route exact path="/releases" component={Catalogue} />
        <Route exact path="/soundpacks" component={Packslist} />
        <Route exact path="/podcasts" component={Podcastlist} />
        <Route exact path="/press" component={Presslist} />
        <Route exact path="/support" component={Supportlist} />
        <Route exact path="/merchandise" component={Merchshop} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/contact" component={Contact} />
        { releases.map( release =>{ return (<Route exact path={'/' + release.id} component={Releasepage} />)}) }
        <Route exact path="/404" component={Notfound} />
        <Redirect to='./404' />
        
  
    </Switch>
    </Router>
        );
    }
}

export default App;