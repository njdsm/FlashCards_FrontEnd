import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar/navbar';
import Sidebar from './components/Sidebar/sidebar';
import CreateCollection from './components/CreateCollection/createCollection';
import SelectedCollection from './components/SelectedCollection/selectedCollection';
import SearchResults from './components/SearchResults/searchResults';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allCollections: [],
      currentCard: {},
      currentCollection: {},
      cardsInCollection: [],
      selectedCollectionRender: "",
      searchResults: []
      }
    this.getCollections();
  }
  
  getCollections = async () => {
    let query = "http://127.0.0.1:8000/collection/";
    let collections = await axios.get(query);
    this.setState({allCollections: collections.data});
  }

  handleSearch = (searchTerm) => {
    let results = this.state.allCollections.filter((collection) => {
      if (collection.name.toLowerCase().includes(searchTerm.toLowerCase())){
        return collection
      }
      else if (collection.description.toLowerCase().includes(searchTerm.toLowerCase())){
        return collection
      }
    })
    this.setState({searchResults: results})
  }

  createCollection = async (newCollection) => {
    try{
      await axios.post(`http://127.0.0.1:8000/collection/`, newCollection).then(this.getCollections())
    }
    catch(ex){
      console.log(`Error: ${ex}`)
    }
    this.getCollections()
  }

  selectCollection = (collection) => {
    this.setState({searchResults: []})
    this.setState({currentCollection: collection});
    this.setCollectionCards(collection.id)
  }

  async setCollectionCards(collectionId){
    let query = "http://127.0.0.1:8000/flashcard/" + collectionId + "/"
    let result = await axios.get(query)
    this.setState({cardsInCollection: result.data})     
  }

  async updateCard(card, id){
    let query = "http://127.0.0.1:8000/flashcard/" + id + "/";
    await axios.put(query, card);
    this.setCollectionCards(card.collection)
  }

  async deleteCard(card){
    await axios.delete("http://127.0.0.1:8000/flashcard/" + card.id + "/")
    this.setCollectionCards(card.collection)
  }

  async addCard(card){
    await axios.post("http://127.0.0.1:8000/flashcard/", card);
    this.setCollectionCards(card.collection)
  }

  render(){
    return (
      <div className="App">
        <div>
          <Navbar handleSearch={(searchTerm) => this.handleSearch(searchTerm)}/>
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
                  <SearchResults select={(collection) => this.selectCollection(collection)} results={this.state.searchResults} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <SelectedCollection cards={this.state.cardsInCollection} collection={this.state.currentCollection} updateCard={(card, id) => this.updateCard(card, id)} deleteCard={(card) => this.deleteCard(card)} addCard={(card) => this.addCard(card)}/>                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
