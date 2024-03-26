import React, { useEffect } from 'react';

const Feed = () => {
    useEffect(() => {
        // Dynamically load Facebook SDK script
        const script = document.createElement('script');
        const sdkUrl = `https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=your-app-id&autoLogAppEvents=1`;
        script.src = sdkUrl;
        script.async = true;

        // Callback function to initialize the SDK after the script is loaded
        script.onload = () => {
            window.FB.init({
                appId: 'your-app-id',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v9.0'
            });
        };

        // Append the script to the document body
        document.body.appendChild(script);

        // Clean up function to remove the script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="fb"
            className="fb-page"
            data-href="https://www.facebook.com/bubaste"
            data-tabs="timeline"
            data-width="500"
            data-height=""
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
            style={{
                marginTop: '20px',
                maxWidth: '100%'
            }} >
           
            <blockquote cite="https://www.facebook.com/bubaste"
                className="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/bubaste">Bubastė</a>
            </blockquote>
        </div>
    );
};

export default Feed;

