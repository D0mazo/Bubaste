import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM.render instead of ReactDOM
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import ColorSchemesExample from './Elements/Navigation.jsx';
import StackedExample from './Elements/Links.jsx';
import FluidExample from './Elements/ImageSlider.jsx';
import Feed from './Elements/FacebookFeed.jsx';
import ShapeExample from './Elements/Galery.jsx';
import BasicExample from './Elements/Articles.jsx';

ReactDOM.render(
    <React.StrictMode>
        <ColorSchemesExample />
        <FluidExample />
        <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0 20px' }}>
                <StackedExample style={{ flex: '1 0 15%' }} />
                <ShapeExample style={{ flex: '1 0 60%' }} />
                <Feed style={{ flex: '1 0 25%' }} />
            </div>
        </div>
        <BasicExample />
        <App />
    </React.StrictMode>,
    document.getElementById('root') // Call ReactDOM.render with the root DOM element
);