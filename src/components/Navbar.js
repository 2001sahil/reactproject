import React from 'react'
import "../App.css"
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div className='NavBar'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">News</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">General<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/science">science</Link>
                        </li>


                    </ul>

                </div>
            </nav>
        </div>
    )

}
