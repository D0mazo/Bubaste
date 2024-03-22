import Nav from 'react-bootstrap/Nav';

function StackedExample() {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="https://carnilove.com/lt">
                <img src="https://bubaste.lt/net_files/banners/title_carnilove.jpg" alt="Carnilove" />
            </Nav.Link>
            <Nav.Link href="https://acana.kaivana.lt/">
                <img src="https://bubaste.lt/net_files/banners/title_acana.jpg" alt="Acana" />
            </Nav.Link>
            <Nav.Link href="https://www.inabafoods-europe.com/">
                <img src="https://bubaste.lt/net_files/banners/title_churu.jpg" alt="Inaba" />
            </Nav.Link>
        </Nav>
    );
}

export default StackedExample;