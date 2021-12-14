import React from 'react';
import { Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar expand="lg">
                <Navbar.Brand href="#home"><strong>Shortly</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto d-flex justify-content-between align-items-center" id="navbar-container">
                    <div className="d-flex align-items-center links-container">
                        <Nav.Link href="#home">Feature</Nav.Link>
                        <Nav.Link href="#link">Pricing</Nav.Link>
                        <Nav.Link href="#resources">Resources</Nav.Link>
                    </div>
                    <div className="d-flex align-items-center links-container">
                        <Nav.Link href="#login">Login</Nav.Link>
                        <Nav.Link href="#signup"><div id="btn-sign-up" role="button">Sign Up</div></Nav.Link>
                    </div>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;