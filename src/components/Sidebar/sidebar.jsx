import React, {useState}  from 'react';
import axios from 'axios';
import './sidebar.css';

const Sidebar = (props) => {
    return(
        <div>      
            <div class="sidebar bg-dark">
                <a class="active" href="#home"><strong>Collections</strong></a>
                <a href="#">Collection 1</a>
                <a href="#">Collection 2</a>
                <a href="#">Collection 3</a>
                <p>Create Collection</p>
            </div>
        </div>
    )
}

export default Sidebar;