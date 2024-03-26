import React, { Component } from 'react';
import { FacebookProvider, Page } from 'react-facebook';

export default class Example extends Component {
    render() {
        return (
            <FacebookProvider appId="1133838324324118">
                <Page href="https://www.facebook.com/bubaste" tabs="timeline" />
            </FacebookProvider>
        );
    }
}
