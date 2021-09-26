import React from 'react';
import logo from '../../watching-a-movie.png';
import "./Header.css"
const Header = () => {
    return (
        <div className="header p-3 ">
            <div className="d-flex justify-content-center align-items-center flex-column">
        <img src={logo} className=" logo-sizing " alt="" />
        <h1><span>Keep calm,</span> eat popcorn and watching series.</h1>
            </div>
            <div>
            <h2 className="text-center">Choose your 5 favourite series from the list.</h2>
            <h6 className="text-center">Movie and series always give us joy. Keep watching movie and stay connected with us.</h6>
            <h2 className="text-center">Total Cost: <span className="fw-bold">1045 Million.</span></h2>
            </div>
        </div>
    );
};

export default Header;