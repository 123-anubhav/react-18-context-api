import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Optional for additional custom styles

let Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand fw-bold " to="/">React with Props drilling - Context API - lifeCycle Example</Link>
                    <div className="d-flex">
                        <Link className="nav-link " to="/props-dril/parent">Parent</Link>
                        {/* <Link className="nav-link " to="/props-dril/child-a">Child-A</Link>
                        <Link className="nav-link " to="/props-dril/child-b">Child-B</Link>
                        <Link className="nav-link " to="/props-dril/child-c">Child-C</Link>
                        <Link className="nav-link " to="/props-dril/child-d">Child-D</Link> */}
                        &nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;
                        <Link className="nav-link " to="/context-api/parent">Parent-contxt-api</Link>
                       {/*  <Link className="nav-link " to="/context-api/child-a">Child-A-contxt-api</Link>
                        <Link className="nav-link " to="/context-api/child-b">Child-B-contxt-api</Link>
                        <Link className="nav-link " to="/context-api/child-c">Child-C-contxt-api</Link>
                        <Link className="nav-link " to="/context-api/child-d">Child-D-contxt-api</Link> */}
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
