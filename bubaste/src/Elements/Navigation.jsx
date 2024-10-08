﻿import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
        <Navbar bg="light" data-bs-theme="light" expand="md">
            <Container fluid className="px-0">
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="https://members.bubaste.lt/index.php?show=register&L=lt">Registracija</Nav.Link>
                            <Nav.Link href="https://members.bubaste.lt/">Prisijungimas</Nav.Link>
                            <Nav.Link href="#=">Foto Galerija</Nav.Link>
                            <Nav.Link href="#fb">Naujienos Facebook'e</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="navigationText" style={{ textAlign: 'left', marginRight: '10px' }}> {/* Added margin-right */}
                        <p style={{ marginBottom: '5px' }}>Lietuvos Felinologų draugija</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <a href="https://bubaste.lt/">
                            <img
                                src="https://71f29343f2.clvaw-cdnwnd.com/98b5d4ab932d4f8360a17742ecf1c7c1/200000009-53baf53bb1/LFD%20-quot.jpg%3BBubast%C4%97-quot.jpg%3B%20logotipas%20%28JPEG%20formatas%2C%201025x1000%20ta%C5%A1k%C5%B3%29%20%281%29-9.jpg?ph=71f29343f2"
                                alt="GGA"
                                style={{ width: '60px', height: 'auto' }}
                            />
                        </a>
                    </div>
                </Container>
            </Container>
        </Navbar>
    );
}

export default ColorSchemesExample;