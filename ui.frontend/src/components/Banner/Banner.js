import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MapTo} from '@adobe/aem-react-editable-components';
require('./Banner.css');

// Logic to render placeholder or component
const BannerEditConfig = {

    emptyLabel: 'Banner (Custom)',
    isEmpty: function(props) {
        return !props || !props.bannerImage;
    }
};

function BannerWrapper(props) {
    return (
        <div className="Banner">
            <div className={`Banner-container ${props.bannerAlignment}`}>
                <div className="Banner-image">
                    <img src={props.bannerImage} alt="Some text" />
                </div>
                <div className="Banner-content">
                    <div className="Banner-inside-content">
                        <h1>{props.bannerText}</h1>
                        <Link className="Banner-cta" to={props.bannerCtaLink}>
                            {props.bannerCtaText}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Banner(props) {
    // render nothing if component not configured
    if (BannerEditConfig.isEmpty(props)) {
        return null;
    }

    return BannerWrapper(props);
}

// Map OpenWeather to AEM component
MapTo('wknd-spa-react/components/banner')(Banner, BannerEditConfig);

/*export default class Banner extends Component {

    render() {
        return (
                <div className="Banner-Wrapper">
                    <div className="Banner">
                        <div className="Banner-container">
                            <div className="Banner-image">
                                <img src="https://placehold.co/600x200" alt="Some text" />
                            </div>
                            <div className="Banner-content">
                                <div className="Banner-inside-content">
                                    <h1>Banner Main Text</h1>
                                    <Link className="Banner-cta" to="/content/wknd-spa-react/us/en/home.html">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
} */