//import REACT from "react"
import logo from "../../img/logo.png";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import "./Header.css" ;

let Header = () => {
	return(
      <>        
            <Navbar className="bg-body-tertiary justify-content-center header_container" id="outer-container" >
                <Container id="header_container">
                    <Navbar.Brand href="/home">
                        <img
                        src={logo}
                        width="70"
                        height="70"
                        className="d-inline-block align-top"
                        alt="To-Do App logo"
                        />
                    </Navbar.Brand>
                   <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>                    
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/todos">Task list</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
<<<<<<< HEAD
                        <Nav.Link href="/calendar">Calender View</Nav.Link>
=======
                        <Nav.Link href="/calenderview">Calender View</Nav.Link>
>>>>>>> d39596083d1937700d85e0358818235ae54e9c7a
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/help">Help</Nav.Link>
                    </Nav.Item>
                </Container>
            </Navbar>        
      </>  
    );
}


export default Header;