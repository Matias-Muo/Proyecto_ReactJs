import CardWidget from "../CartWidget";
import "./navBar.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from "react-router-dom";

function NavBar(){
    return (
       
           <Navbar sticky="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><NavLink to={'/'} >Logo</NavLink> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >
              <NavLink to={'/category/novelas'}>Novelas</NavLink>
            </Nav.Link>
            <Nav.Link >
              <NavLink to={'/category/filosofia'}>Filosofia</NavLink>
            </Nav.Link>
           
          </Nav>
          <CardWidget/>
        </Container>
      </Navbar>
         
   
     );

}
export default NavBar;