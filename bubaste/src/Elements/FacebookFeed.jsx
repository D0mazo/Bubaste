import React from 'react';

const Feed = React.memo((props) => {
    React.useEffect(() => {
        // Dynamically load Facebook SDK script
        const script = document.createElement('script');
        script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=your-app-id&autoLogAppEvents=1";
        script.async = true;
        document.body.appendChild(script);

        // Clean up function to remove the script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <React.Fragment>
            <div id="fb-root"></div>
            <div
                className="fb-page"
                data-href="https://www.facebook.com/bubaste"
                data-tabs="timeline"
                data-width=""
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
            >
                <blockquote
                    cite="https://www.facebook.com/bubaste"
                    className="fb-xfbml-parse-ignore"
                >
                    <a href="https://www.facebook.com/bubaste">Bubaste</a>
                </blockquote>
            </div>
        </React.Fragment>
    );
});

export default Feed;