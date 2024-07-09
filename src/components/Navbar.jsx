import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-purple-200">
        <div className="flex-1">
          <a className=" normal-case text-2xl font-bold">JobSphere</a>
        </div>
        <div className="flex-1">
          <ul className="menu menu-horizontal px-1">
            <li>
                <Link to={"/"} className='font-bold'>Home</Link>
            </li>
            <li>
              <Link to={"/applied"} className='font-bold'>Applied Jobs</Link>
            </li>
            <li>
              <Link to={"/statistics"} className='font-bold'>Statistics</Link>
            </li>
            <li>
              <Link to={"/blog"} className='font-bold'>Blog</Link>
            </li>
            
            
          </ul>
        </div>
        <div>
             <button className="btn btn-md btn-primary">Start Applying</button>
        </div>
      </div>
  
    );
};

export default Navbar;