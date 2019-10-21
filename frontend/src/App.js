import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Routes from './Components/Routes';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Routes />
      </div>
     );
  }
}
 
export default App;
