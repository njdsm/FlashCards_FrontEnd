import React, {useState}  from 'react';
import './sidebar.css';

const Sidebar = (props) => {

    const handleClick = collection => {
        console.log(collection)
        props.select(collection);
    }

    return(
        <div>      
            <div className="sidebar bg-dark">
                <a className="active" href="#home"><strong>Collections</strong></a>
                <ol className="list-group list-group-numbered">
                    {props.collections.map((collection) => 
                        <button key={collection.id} className="bg-dark" onClick={() => handleClick(collection)}>
                            <div className="ms-2 me-auto bg-dark">
                                <div className="fw-bold bg-dark">{collection.name}</div>
                                {collection.description}
                            </div>
                            <span className="badge bg-primary rounded-pill bg-dark">{collection.numberOfCards}</span>
                        </button>                
                    )}
                </ol>
            </div>
        </div>
    )
}

export default Sidebar;