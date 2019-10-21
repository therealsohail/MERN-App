import React, { Component } from 'react';
import Axios from 'axios';

class Delete extends Component {
    state = {  }
    deleteRecord = e => {
        e.preventDefault();
        const pathname = window.location.pathname.split('/')
        const id = pathname[2];        
        Axios.delete(`http://localhost:8080/api/ninja/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    render() { 
        return ( 
            <div>
                <h2>Delete the record</h2>
                <div className="alert alert-info alert-danger mt-3">
                    are you sure you want to Delete? <strong>Yes or Cancel</strong> 
                </div>  
                <button onClick={this.deleteRecord} className="btn btn-warning mr-2">Yes</button>
                <button className="btn btn-secondary" >Cancel</button>
            </div>
         );
    }
}
 
export default Delete;