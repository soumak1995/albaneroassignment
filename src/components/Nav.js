import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Nav.css';
function Nav() {
    return (
        <nav className="navbar">
               <div className="navbar__ul">
               <span className="nav-item">
                    <Link  to="/">
                    <span>Dashboard</span>
                    </Link>
                </span>
                <span className="nav-item">
                    <Link  to="/graph">
                    <span>Graph</span>
                    </Link>
                </span>
               </div>
                
           
            
        </nav>
    )
}

export default Nav
