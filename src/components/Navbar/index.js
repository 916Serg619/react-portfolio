import React  from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import profilePic from '../Assets/Profile-pic.jpg';
import Resume from '../Assets/SergioAguirre.Resume.UCSD.pdf';
import Background from '../Background/Background';






const Navbar = () => {
    return (
              <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className='navbar-nav mr-auto name'>Sergio Aguirre</ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link  to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                 <Link  to="/Projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to="/Contact">Contact</Link>
                            </li>
                        </ul>
                </div>
              
    </nav>
       
    )
}

export default Navbar;