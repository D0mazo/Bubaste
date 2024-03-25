import Carousel from 'react-bootstrap/Carousel';

function SliderPhoto() {
    return (
        <Carousel>
            <Carousel.Item style={{ position: 'relative' }}>
                <img
                    className="d-block w-100"
                    src="https://members.bubaste.lt/shared/gallery/cdda17f204c09ef1cacb96dd3118012e_full.jpg"
                    alt="First slide"
                    style={{ objectFit: 'cover', height: '100vh' }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <h3>Lietuvos Fenilogų draugija</h3>
                    <p>Lithuanian Fenilogy Association</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://members.bubaste.lt/shared/gallery/cdda17f204c09ef1cacb96dd3118012e_full.jpg"
                    alt="First slide"
                    style={{ objectFit: 'cover', height: '100vh' }}
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://members.bubaste.lt/shared/gallery/cdda17f204c09ef1cacb96dd3118012e_full.jpg"
                    alt="First slide"
                    style={{ objectFit: 'cover', height: '100vh' }}
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SliderPhoto;