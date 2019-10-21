import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
    state = {  }
    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                       <NavLink to='/' activeClassName='active' className='nav-link'>Ninjas</NavLink> 
                    </li>
                    <li class="nav-item">
                        <NavLink to='/Create' activeClassName='active' className='nav-link'>Create</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to='/Update' activeClassName='active' className='nav-link'>Update</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to='/Delete' activeClassName='active' className='nav-link'>Delete</NavLink>
                    </li>
                </ul>
            </div>
            </nav>
         );
    }
}
 
export default Navigation;