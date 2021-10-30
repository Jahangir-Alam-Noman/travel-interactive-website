import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/log_2.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" className="header_bgColor py-3" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/home"><img src={logo} width="120px" alt="" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto anchor">

                            {user.displayName ?
                                <div>
                                    <Link to="/home">Home</Link>
                                    <Link to="/bookedPackage">My Booked Package</Link>
                                    <Link to="/manageBooked">Manage Booked</Link>
                                    <Link to="/addPackage">Add Package</Link>
                                    <Link to="/about">About Us</Link>
                                </div>
                                :
                                <div>
                                    <Link to="/home">Home</Link>
                                    <Link to="/about">About Us</Link>
                                </div>
                            }

                        </Nav>

                        <Nav className="">
                            <Nav.Link className="text-white" href="#deets">{user.displayName}</Nav.Link>
                            {user.displayName ?
                                <button onClick={logOut} type="button" class="btn btn-outline-success">Log out</button>

                                :
                                <Link className="text-white" eventKey={2} to="/login">
                                    <button type="button" className="btn btn-outline-success">Login</button>
                                </Link>
                            }

                            {/* 
                            {user.displayName && <span style={{ color: 'white' }}>Hello {user.displayName}</span>}
                            {

                                user.displayName ?
                                    <button onClick={logOut}>Log Out</button>
                                    :
                                    <NavLink to="/login">Login</NavLink>
                            } */}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;