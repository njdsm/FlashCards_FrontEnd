import React, {useState}  from 'react';
import {Button, Modal} from 'react-bootstrap';


const CreateFlashCard = (props) => {
    const [modalState, setModalState] = useState(false);
    const [frontText, setFrontText] = useState("");
    const [backText, setBackText] = useState("");

    const toggleModal = () => setModalState(!modalState);

    const cardSubmit = async (event) => {
        event.preventDefault();
        let newFlashCard = {
            'front_text': frontText,
            'back_text': backText,
            'collection': props.collection.id
        }
        props.create(newFlashCard);
    }
    
    return(
        <div className="card w-50">
            <div>
                <h5>Create a new flashCard for this collection</h5>
                <Button className="btn btn-dark" onClick={toggleModal}>Create</Button>
                <Modal show={modalState} onHide={() => toggleModal}>
                    <Modal.Header>New Flashcard</Modal.Header>
                    <Modal.Body>
                        <form onSubmit={event => cardSubmit(event)}>
                            <label>Front Text: </label>
                            <input onChange={event => setFrontText(event.target.value)} type="text" name="frontText" id="frontText" value={frontText} /><br></br>
                            <label>Back Text: </label>
                            <input onChange={event => setBackText(event.target.value)} type="text" name="backText" id="backText" value={backText} /> <br/>
                            <button className="btn btn-dark" type="submit" value="Post" onClick={toggleModal}>Submit</button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="reply-modal-button">
                            <Button className="btn btn-dark" onClick={toggleModal}>Close</Button>
                        </div>
                    </Modal.Footer>
                </Modal>    
            </div>
        </div>
    )
}

export default CreateFlashCard