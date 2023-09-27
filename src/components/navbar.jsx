import React from 'react'
import { Link  } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarPage = () => {

  const logout=()=>{

    alert("logout successful")
    localStorage.removeItem("login");
    document.location.href="/login"

  }
 
  return (
    <Navbar expand="lg" className=" h6">
      <Container>
        <Navbar.Brand>
          {" "}
          <Link className="navbar-brand" to="/">
            <h3>Todo List</h3>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "400px" }}
            navbarScroll
          >
            <span className="nav-link ">
              <button className="nav-link border rounded " onClick={()=>logout()} style={{backgroundColor:'red', color:'white'}}>
                Logout
              </button>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default  NavbarPage;