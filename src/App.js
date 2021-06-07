import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar/navbar';
import Sidebar from './components/Sidebar/sidebar';
import CreateCollection from './components/CreateCollection/createCollection';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props){
    super(props);
    this.getCollection();
  }

  state = {
    allCollections: {},
    currentCard: {},
    currentCollection: {},
    cardsInCollection: [],
    }
  

  getCollection = async () => {
    let query = "http://127.0.0.1:8000/collection/";
    let collections = await axios.get(query);
    this.setState({collections: collections.data});
  }


  render(){
    return (
      <div className="App">
        <div>
          <Navbar />
          <div className="row">
            <div className="col-md-4">
              <Sidebar />
            </div>
            <div className="col-md-8">
              <CreateCollection />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8">Hello</div>  
            
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
