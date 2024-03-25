import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container fluid className="px-0">
                <Container className="d-flex justify-content-start">
                    <Nav className="me-auto">
                        <Nav.Link href="https://members.bubaste.lt/index.php?show=register&L=lt">Registracija</Nav.Link>
                        <Nav.Link href="https://members.bubaste.lt/">Prisijungimas</Nav.Link>
                        <Nav.Link href="#=">Foto Galerija</Nav.Link>
                        <Nav.Link href="#fb-root">Naujienos Facebook'e</Nav.Link>
                    </Nav>
                </Container>
                <div className="bubaste"
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                    <div className="navigationText"
                        style={{
                            flex: '1',
                            marginRight: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ fontSize: '10px', marginBottom: '5px' }}>Lietuvos Felinolog? draugija</p>
                            <p style={{ fontSize: '10px' }}>Lithunanian Felinology association</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <a href="https://bubaste.lt/">
                            <img
                                src="https://71f29343f2.clvaw-cdnwnd.com/98b5d4ab932d4f8360a17742ecf1c7c1/200000009-53baf53bb1/LFD%20-quot.jpg%3BBubast%C4%97-quot.jpg%3B%20logotipas%20%28JPEG%20formatas%2C%201025x1000%20ta%C5%A1k%C5%B3%29%20%281%29-9.jpg?ph=71f29343f2"
                                alt="GGA"
                                style={{ width: '60px', height: 'auto' }}
                            />
                        </a>
                    </div>
                </div>

            </Container>
        </Navbar>
    );
}

export default ColorSchemesExample;