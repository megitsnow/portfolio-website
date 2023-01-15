import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Style.css';
import {Link} from 'react-scroll'


function AppNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className = "NavBarBrand">Megan Gonzalez Feyko Snow</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="about" className = "NavBarLink">About</Link>
            <Link to="personal-portfolio" className = "NavBarLink">Portfolio</Link>
            <Link to="contact" className = "NavBarLink">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavBar;