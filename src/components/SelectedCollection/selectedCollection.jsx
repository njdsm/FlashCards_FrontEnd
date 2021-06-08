import React, {useState}  from 'react';
import {Button, Modal} from 'react-bootstrap';
import axios from 'axios';



const SelectedCollection = (props) => {

    const [deleteModalState, setDeleteModalState] = useState(false);
    const [updateModalState, setUpdateModalState] = useState(false);
    const [cardFrontText, setCardFrontText] = useState();
    const [cardBackText, setCardBackText] = useState();
    const [currentCard, setCurrentCard] = useState();

    const toggleDeleteModal = () => setDeleteModalState(!deleteModalState);
    const toggleUpdateModal = () => setUpdateModalState(!updateModalState);

    const cardSubmit = async (event) => {
        event.preventDefault();
        let updatedCard = {
            'front_text': cardFrontText,
            'back_text': cardBackText,
            'collection': currentCard.collection
        }
        props.updateCard(updatedCard, currentCard.id)
    }

    const updateCardButton = (card) => {
        setCurrentCard(card);
        toggleUpdateModal();
    }

    const deleteCardButton = (card) => {
        setCurrentCard(card);
        toggleDeleteModal();
    }

    return(
        <div>
            <div>
                <h1>{props.collection.name}</h1>
                <h5>{props.collection.description}</h5>
            </div>
            <div className="row">
                <div className="col-sm-6">Front of Card</div>
                <div className="col-sm-6">Back of Card</div>
            </div>
            {props.cards.map((card) => 
                <div key={card.id} className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">{card.front_text}</p>
                            </div>
                        </div>
                        <div className="row">
                                <div className="col-sm-6">
                                    <button className="btn btn-dark" onClick={() => updateCardButton(card)}>Edit</button>
                                </div>
                                <div className="col-sm-6">
                                    <button className="btn btn-dark" onClick={() => deleteCardButton(card)}>Delete</button>
                                </div>
                            </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">{card.back_text}</p>
                            </div>
                        </div>
                    </div>
              </div>
            )}
            <Modal show={updateModalState} onHide={() => toggleUpdateModal}>
                    <Modal.Header>Edit Flashcard</Modal.Header>
                    <Modal.Body>
                        <form onSubmit={event => cardSubmit(event)}>
                            <label for="Front_Text">Card Front Text: </label>
                            <input onChange={event => setCardFrontText(event.target.value)} type="text" name="frontText" id="frontText" value={cardFrontText} /><br></br>
                            <label for="Back_Text">Card Back Text: </label>
                            <input onChange={event => setCardBackText(event.target.value)} type="text" name="backText" id="backText" value={cardBackText} /> <br/>
                            <button type="submit" value="Post" onClick={toggleUpdateModal}>Submit</button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="reply-modal-button">
                            <Button onClick={toggleUpdateModal}>Close</Button>
                        </div>
                    </Modal.Footer>
                </Modal>   
        </div>
    )
}

export default SelectedCollection