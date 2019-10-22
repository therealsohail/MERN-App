import React, { Component } from 'react';
import Axios from 'axios';

class Update extends Component {
    state = {
        Name: '',
        Rank: '',
        Available: false,
        notif:''
    }
    handleChange =(e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const pathname = window.location.pathname.split('/')
        const id = pathname[2];   
        if(this.state.Name === '' || this.state.Rank === '')
        {
            return(
                this.setState({
                    notif: <div className="alert alert-danger alert-dismissible mt-3">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Error!</strong> Enter the following values.
                    </div>
                })                
            )
        }     
        Axios.put(`http://localhost:8080/api/ninja/${id}`,this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        this.setState({
            notif: <div className="alert alert-info alert-dismissible mt-3">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <strong>Success!</strong> Ninja have been updated!
          </div>
        })
    }
    componentDidMount(){
        const pathname = window.location.pathname.split('/')
        const id = pathname[2];        
        Axios.get(`http://localhost:8080/api/ninja/${id}`)
        .then(res => {
            this.setState({
                Name: res.data.name,
                Rank: res.data.rank,
                Available: res.data.available,
            })
        })
        .catch(err => console.log(err))
    }
    render() { 
        const {Name,Rank,Available,Ninja} = this.state;
        return ( 
            <div>
                <h2>Update</h2>
                <form onSubmit={this.handleSubmit}>
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
                        <select value={Available} onChange={this.handleChange} name='Available' className='form-control'>
                            <option selected>Select Availablity</option>
                            <option value='true'>True</option>
                            <option value='false'>False</option>
                        </select>
                    </div>
                    <input type="submit" value="Update" className='btn btn-primary'/>
                </form>
                {this.state.notif}
            </div>
        );
    }
}
 
export default Update;