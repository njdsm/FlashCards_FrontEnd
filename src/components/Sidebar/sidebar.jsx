import React, {useState}  from 'react';
import './sidebar.css';

const Sidebar = (props) => {
    console.log(props.collections)

    return(
        <div>      
            <div className="sidebar bg-dark">
                <a className="active" href="#home"><strong>Collections</strong></a>
                <ol class="list-group list-group-numbered">
                    {props.collections.map((collection) => 
                        <a href="#">
                            <li key={collection.id} class="list-group-item d-flex justify-content-between align-items-start bg-dark">
                                <div class="ms-2 me-auto bg-dark">
                                <div class="fw-bold bg-dark">{collection.name}</div>
                                {collection.description}
                                </div>
                                <span class="badge bg-primary rounded-pill bg-dark">{collection.numberOfCards}</span>
                            </li>    
                        </a>                
                    )}
                </ol>
            </div>
        </div>
    )
}

export default Sidebar;