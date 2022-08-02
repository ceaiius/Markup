import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from "./assets/logo.svg";



function NavBar() {
  return (
    
    <Navbar  bg="white" expand="lg" className='mt-4'>
      <Container fluid>
        <Navbar.Brand className='ms-5' href="#"> <img src={icon}/></Navbar.Brand>
        <Navbar.Toggle  aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-5 nav-fill w-25"
            style={{ maxHeight: '100px',fontFamily:"Helvetica" }}
            navbarScroll
          >
            <Nav.Link>Home</Nav.Link>
            
            <NavDropdown title="Community" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link >
              Blog
            </Nav.Link>
            <Nav.Link >Events</Nav.Link>
          </Nav>
          <Form className="d-flex me-5 form-div">
            <Form.Control
              type="search"
              placeholder="Search Here"
              className="me-2 form-control-sm"
              aria-label="Search"
            />
            <Button class="btn btn-primary me-5">Log in</Button>
          </Form>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;