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
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://members.bubaste.lt/shared/gallery/cdda17f204c09ef1cacb96dd3118012e_full.jpg"
                    alt="First slide"
                    style={{ objectFit: 'cover', height: '100vh' }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://members.bubaste.lt/shared/gallery/cdda17f204c09ef1cacb96dd3118012e_full.jpg"
                    alt="First slide"
                    style={{ objectFit: 'cover', height: '100vh' }}
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default SliderPhoto;