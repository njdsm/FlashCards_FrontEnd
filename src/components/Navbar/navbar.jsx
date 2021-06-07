import React, {useState}  from 'react';
import './navbar.css';

const Navbar = (props) => {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSearch(searchTerm)
        setSearchTerm("")
    }
    
    return(
        <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <h4 className="text-white">Welcome to FlashyCards!</h4>
                    <span className="text-muted">Create a collection below to get started.</span>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <form className="form-inline" onSubmit={event => handleSubmit(event)}>
                    <input className="form-control mr-sm-2" onChange={event => setSearchTerm(event.target.value)} value={searchTerm} placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar;