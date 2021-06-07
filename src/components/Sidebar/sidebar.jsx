import React, {useState}  from 'react';
import './sidebar.css';

const Sidebar = (props) => {

    const handleClick = collection => {
        props.select(collection);
    }

    return(
        <div>      
            <div className="sidebar bg-dark">
                <ol className="list-group list-group-numbered">
                    {props.collections.map((collection) => 
                        <button key={collection.id} className="bg-dark" onClick={() => handleClick(collection)}>
                            <div className="ms-2 me-auto bg-dark">
                                <div className="fw-bold bg-dark">{collection.name}</div>
                                <div className="fw-bold bg-dark">{collection.description}</div>
                            </div>
                            <div className="badge bg-primary rounded-pill bg-dark">{collection.numberOfCards}</div>
                        </button>                
                    )}
                </ol>
            </div>
        </div>
    )
}

export default Sidebar;