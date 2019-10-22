import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg   bg-dark navbar-dark">
                <a class="navbar-brand" href="#"><strong>Ninja MERN</strong></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                       <NavLink exact to='/' activeClassName='active' className='nav-link'>Ninjas</NavLink> 
                    </li>
                    <li class="nav-item">
                        <NavLink to='/Create' activeClassName='active' className='nav-link'>Create a Ninja</NavLink>
                    </li>
                </ul>
            </div>
            </nav>
         );
    }
}
 
export default Navigation;