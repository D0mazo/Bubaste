import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import ColorSchemesExample from './Elements/Navigation.jsx';
import Feed from './Elements/FacebookFeed.jsx';
import SliderPhoto from './Elements/ImageSlider.jsx';
import LogoSlider from './Elements/LogoSlider.jsx';


ReactDOM.render(
    <React.StrictMode>
        <div style={{ height: '100vh' }}>
            <ColorSchemesExample />
            <LogoSlider />
            <SliderPhoto />
            <div style={{ textAlign: 'center', height: '100%' }}>
                <div style={{ display: 'inline-block', textAlign: 'left' }}>
                    <div style={{ width: '100%' }}>
                        <Feed />
                    </div>
                </div>
            </div>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
); 