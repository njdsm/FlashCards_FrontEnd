import React, {useState}  from 'react';
import './createCollection.css';

const CreateCollection = (props) => {
    
    return(
        <div class="card w-50">
            <div class="card-body">
                <h5 class="card-title">Create Collection</h5>
                <p class="card-text">Create a collection of flashcards to help you learn!</p>
                <a href="#" class="btn btn-primary">Create</a>
            </div>
        </div>
    )

}

export default CreateCollection