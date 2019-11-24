import React from 'react';
import { Link } from "gatsby";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog/">Blog</Link></li>
                <li><Link to="/product/">Product</Link></li>
                <li><Link to="/images/">Images</Link></li>
                <li><Link to="/tours/">Tours</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
