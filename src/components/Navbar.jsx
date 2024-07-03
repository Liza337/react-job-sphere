import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-200">
        <div className="flex-1">
          <a className=" normal-case text-xl">JobSphere</a>
        </div>
        <div className="flex-1">
          <ul className="menu menu-horizontal px-1">
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/jobs"}>Applied Jobs</Link>
            </li>
            <li>
              <Link to={"/statistics"}>Statistics</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            
            
          </ul>
        </div>
        <div>
             <button className="btn btn-md btn-secondary">Start Applying</button>
        </div>
      </div>
  
    );
};

export default Navbar;