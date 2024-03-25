import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import ColorSchemesExample from './Elements/Navigation.jsx';
import Feed from './Elements/FacebookFeed.jsx';
import ShapeExample from './Elements/Galery.jsx';
import BasicExample from './Elements/Articles.jsx';
import SliderPhoto from './Elements/ImageSlider.jsx';
import LogoSlider from './Elements/LogoSlider.jsx';

ReactDOM.render(
    <React.StrictMode>
        <ColorSchemesExample />
        <LogoSlider />
        <SliderPhoto />
        <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-block', textAlign: 'left' }}>
                <div style={{ width: '100%' }}>
                    <Feed />
                </div>
                <ShapeExample />
            </div>
        </div>
        <BasicExample />
        <App />
    </React.StrictMode>,
    document.getElementById('root') 
);