import React, { useState, useEffect } from 'react';

const Menu = () => {
    return (
        <>
            <div className='col-md-6 col-sm-4 col-3'>
                <nav className="navbar navbar-expand-lg ml-auto">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">News</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">FeedBack</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
};
export default Menu;
