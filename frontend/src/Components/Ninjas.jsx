import React, { Component } from 'react';
import Axios from 'axios';
import {NavLink} from 'react-router-dom';

class Ninjas extends Component {
    state = { 
        Ninjas: []
     }
     componentDidMount(){
         this.fetchNinjas();
     }
     fetchNinjas = () => {
        Axios.get('http://localhost:8080/api/ninja')
        .then(response => this.setState({
            Ninjas: response.data
        }))
        
        .catch((err) => console.log(err))
     }
    render() { 
        const {Ninjas} = this.state;
        return ( 
            <div>
                <h2>Ninjas List</h2>
                <table className='table table-striped table-hover '>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rank</th>
                            <th>Available</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Ninjas.map(
                            (ninja) => 
                            <tr key={ninja._id}>
                                <td>{ninja.name}</td>
                                <td>{ninja.rank}</td>
                                <td>{ninja.available ? "True" : "False"}</td>
                                <td>
                                    <NavLink to={`/Update/${ninja._id}`} className=''>Edit</NavLink>
                                        &nbsp; | &nbsp;
                                    <NavLink to={`/Delete/${ninja._id}`} className=''>Delete</NavLink>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Ninjas;