import React, {useState}  from 'react';
import './createCollection.css';
import {Button, Modal} from 'react-bootstrap';


const CreateCollection = (props) => {
    const [modalState, setModalState] = useState(false);
    const [collectionName, setCollectionName] = useState();
    const [collectionDescription, setCollectionDescription] = useState();

    const toggleModal = () => setModalState(!modalState);

    const cardSubmit = async (event, collection) => {
        event.preventDefault();
        collection = {
            'name': collectionName,
            'description': collectionDescription,
            'numberOfCards': 0
        }
        props.create(collection);
    }
    
    return(
        <div className="card w-50">
            <div>
                <h5>Create a new Collection of flashCards</h5>
                <Button className="btn btn-dark" onClick={toggleModal}>Create</Button>
                <Modal show={modalState} onHide={() => toggleModal}>
                    <Modal.Header>New Collection</Modal.Header>
                    <Modal.Body>
                        <form onSubmit={event => cardSubmit(event)}>
                            <label for="Collection_Name">Collection Name: </label>
                            <input onChange={event => setCollectionName(event.target.value)} type="text" name="collectionName" id="collectionName" value={collectionName} /><br></br>
                            <label for="Back_Text">Collection Description: </label>
                            <input onChange={event => setCollectionDescription(event.target.value)} type="text" name="collectionDescription" id="collectionDescription" value={collectionDescription} /> <br/>
                            <button type="submit" value="Post" onClick={toggleModal}>Submit</button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="reply-modal-button">
                            <Button onClick={toggleModal}>Close</Button>
                        </div>
                    </Modal.Footer>
                </Modal>    
            </div>
        </div>
    )

}

export default CreateCollection