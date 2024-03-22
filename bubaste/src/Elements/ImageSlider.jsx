import Image from 'react-bootstrap/Image';

import React from 'react';

function FluidExample() {
    const containerStyle = {
        width: '100%',
        height: '90vh',
        backgroundImage: `url('https://members.bubaste.lt/shared/gallery/cdda17f204c09ef1cacb96dd3118012e_full.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return <div style={containerStyle}></div>;
}

export default FluidExample;