import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavbarMenu = () => {
    return ( 
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" className="border" variant="light">
                <Container>
                    <Navbar.Brand href="#" className='fs-4 '>Time and Color</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav>
                            <Nav.Link eventKey={2} href="#">
                                Generate
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        );
}
 
export default NavbarMenu;