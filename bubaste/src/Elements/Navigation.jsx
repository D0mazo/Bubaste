import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="Links">Nuorodos</Nav.Link>
                        <Nav.Link href="https://members.bubaste.lt/">Nariu zona</Nav.Link>
                        <Nav.Link href="#=">Foto Galerija</Nav.Link>
                        <Nav.Link href="#Feed">Naujienos Facebook'e</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;