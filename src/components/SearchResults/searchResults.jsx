import React from 'react';
import './searchResults.css';



const SearchResults = (props) => {

    const handleClick = collection => {
        props.select(collection);
    }

    return(
        <div>
            <div className="bg-dark">
                <ol className="list-group list-group-numbered">
                    {props.results.map((collection) => 
                    <button key={collection.id} className="bg-dark" onClick={() => handleClick(collection)}>
                    <div className="ms-2 me-auto bg-dark">
                        <div className="fw-bold bg-dark">{collection.name}</div>
                        <div className="fw-bold bg-dark">{collection.description}</div>
                    </div>
                    </button> 
                    )}
             </ol>
           </div>
        </div>
    )
}

export default SearchResults
