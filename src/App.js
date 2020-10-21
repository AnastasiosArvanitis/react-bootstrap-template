import React from 'react';
import {Switch, Route} from 'react-router-dom';

import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import User from './components/User.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return(
        <>
        <NavBar/>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/User' exact component={User} />
        <Home/>
        </Switch>
        </>
    );
}

export default App;