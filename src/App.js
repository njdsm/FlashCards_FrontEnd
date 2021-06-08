import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar/navbar';
import Sidebar from './components/Sidebar/sidebar';
import CreateCollection from './components/CreateCollection/createCollection';
import SelectedCollection from './components/SelectedCollection/selectedCollection';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allCollections: [],
      currentCard: {},
      currentCollection: {},
      cardsInCollection: [],
      }
    this.getCollections();
  }


  

  getCollections = async () => {
    let query = "http://127.0.0.1:8000/collection/";
    let collections = await axios.get(query);
    this.setState({allCollections: collections.data});
  }

  handleSearch = (searchTerm) => {
    let results = this.state.allCollections.map((collection) => {
      if (collection.name.toLowerCase().includes(searchTerm.toLowerCase())){
        return collection
      }
      else if (collection.description.toLowerCase().includes(searchTerm.toLowerCase())){
        return collection
      }
    })
    console.log(results)
  }

  createCollection = async (newCollection) => {
    try{
      await axios.post(`http://127.0.0.1:8000/collection/`, newCollection).then(this.getCollections())
    }
    catch(ex){
      console.log(`Error: ${ex}`)
    }
  }

  selectCollection = (collection) => {
    this.setState({currentCollection: collection})
    this.setCollectionCards(collection.id);
  }

  async setCollectionCards(collectionId){
    let query = "http://127.0.0.1:8000/flashcard/" + collectionId + "/"
    let result = await axios.get(query)
    this.setState({cardsInCollection: result.data})     
  }

  async updateCard(card, id){
    console.log(card)
    console.log(id)
    let query = "http://127.0.0.1:8000/flashcard/" + id + "/";
    let result = await axios.put(query, card);
    this.setCollectionCards(id)
  }

  render(){
    return (
      <div className="App">
        <div>
          <Navbar handleSearch={this.handleSearch}/>
          <div className="row">
            <div className="col-md-3">
              <Sidebar collections={this.state.allCollections} select={(collection) => this.selectCollection(collection)}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-12">
                  <CreateCollection create={(newCollection) => this.createCollection(newCollection)}/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <SelectedCollection cards={this.state.cardsInCollection} collection={this.state.currentCollection} updateCard={(card, id) => this.updateCard(card, id)}/>
                </div>
              </div>
              
            </div>
          </div>
        
        </div>
        
      </div>
    );
  }
}

export default App;
