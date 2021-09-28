import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>This is the always-visible navbar</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/explanation">Explanation</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/lkjhasdf" className='notfound'>(404 Not Found)</Link>


            </nav>
        </div>
      );
}
 
export default Navbar;