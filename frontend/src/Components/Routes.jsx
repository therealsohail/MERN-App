import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Ninjas from './Ninjas';
import Create from './Create';
import Update from './Update';
import Delete from './Delete';
import Err from './Err';
import Navigation from './Navigation';

class Routes extends Component {
    state = {  }
    render() { 
        return ( 
            <BrowserRouter>
                <Navigation/>
                <div className='container m-4'>
                <Switch>
                    <Route exact path='/' component={Ninjas}  />
                    <Route path='/Create' component={Create} />
                    <Route path='/Update' component={Update} />
                    <Route path='/Delete' component={Delete} />
                    <Route component={Err} />
                </Switch>  
                </div>
            </BrowserRouter>
         );
    }
}
 
export default Routes;