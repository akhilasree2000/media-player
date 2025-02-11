import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <Link to={"/"} style={{textDecoration:"none"}}>
     <Navbar className="bg-info sticky-top w-100">
    <Container>
      <Navbar.Brand href="#home" style={{color:"white", fontSize:"20px"}}>
      <i style={{margin:"10px",}} className="fa-solid fa-music" ></i>
       Media Player
      </Navbar.Brand>
    </Container>
  </Navbar>
   </Link>
  )
}

export default Header