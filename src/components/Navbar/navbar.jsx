import React, {useState}  from 'react';
import './navbar.css';

const Navbar = (props) => {
    
    return(
        <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <h4 class="text-white">Welcome to FlashyCards!</h4>
                    <span class="text-muted">Create a collection below to get started.</span>
                </div>
            </div>
            <nav class="navbar navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search Collections" aria-label="Search"/>
                    <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar;