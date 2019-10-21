import React, { Component } from 'react';
import Axios from 'axios';

class Create extends Component {
    state = {
        Name: '',
        Rank: '',
        Available: false,
        notif: ''
    }
    handleChange = (e) => {
            this.setState({[e.target.name]:e.target.value},()=>{console.log(this.state.Available)})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const config = {
            headers: {
              "Content-Type" : "application/json"
            }
          };
        Axios.post('http://localhost:8080/api/ninja/',this.state, config)
        .then(res => {console.log(res)})
        .catch(err=>{console.log(err)});
        this.setState({
            notif: <div className="alert alert-info alert-dismissible mt-3">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <strong>Success!</strong> Ninja have been added into the list.
          </div>
        })
    }
    render() { 
        const {Name,Rank,Available} = this.state;
        return ( 
            <div>
                <h2>Create</h2>
                <form method='POST' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Name</label>
                        <input className='form-control' 
                        type="text" value={Name} 
                        name='Name'
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Rank</label>
                        <input className='form-control'
                         type="text" value={Rank} 
                         name='Rank'
                         onChange={this.handleChange}
                         />
                    </div>
                    <div className='form-group'>
                        <label>Available</label>
                        <select onChange={this.handleChange} name='Available' className='form-control'>
                            <option selected>Select Availablity</option>
                            <option value='true'>True</option>
                            <option value='false'>False</option>
                        </select>
                    </div>
                    <input type="submit" value="Create" className='btn btn-primary'/>
                </form>
                {this.state.notif}
            </div>
         );
    }
}
 
export default Create;