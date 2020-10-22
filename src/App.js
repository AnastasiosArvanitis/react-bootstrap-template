import React from 'react';
import {Switch, Route} from 'react-router-dom';

import NavBarContent from './content/NavBarContent.js';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';
import Documentation from './components/Documentation/Documentation.jsx';
import CustomComponents from './components/CustomComponents/CustomComponents.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return(
        <>
        <NavBar/>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Documentation' component={Documentation} />
            <Route path='/CustomComponents' component={CustomComponents} />
        </Switch>
        </>
    );
}

export default App;