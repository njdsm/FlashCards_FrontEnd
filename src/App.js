import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar/navbar';
import Sidebar from './components/Sidebar/sidebar';
import CreateCollection from './components/CreateCollection/createCollection';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.getCollections();
  }

  state = {
    allCollections: [],
    currentCard: {},
    currentCollection: {},
    cardsInCollection: [],
    }
  

  getCollections = async () => {
    let query = "http://127.0.0.1:8000/collection/";
    let collections = await axios.get(query);
    this.setState({allCollections: collections.data});
  }

  createCollection = async (newCollection) => {
    console.log(newCollection)
    try{
      const reply = await axios.post(`http://127.0.0.1:8000/collection/`, newCollection).then(this.getCollections())
    }
    catch(ex){
      console.log(`Error: ${ex}`)
    }
  }


  render(){
    return (
      <div className="App">
        <div>
          <Navbar />
          <div className="row">
            <div className="col-md-5">
              <Sidebar collections={this.state.allCollections}/>
            </div>
            <div className="col-md-7">
              <CreateCollection create={(newCollection) => this.createCollection(newCollection)}/>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
