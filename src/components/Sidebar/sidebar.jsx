import React, {useState}  from 'react';
import './sidebar.css';

const Sidebar = (props) => {
    return(
        <div>      
            <div class="sidebar bg-dark">
                <a class="active" href="#home"><strong>Collections</strong></a>
                <a href="#news">Collection 1</a>
                <a href="#contact">Collection 2</a>
                <a href="#about">Collection 3</a>
                <p>Create Collection</p>
            </div>
        </div>
    )
}

export default Sidebar;