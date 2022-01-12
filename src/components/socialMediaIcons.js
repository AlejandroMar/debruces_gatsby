import * as React from 'react';
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
    faWikipediaW,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socialMedia = [
    { icon: faFacebook, link: '#' },
    { icon: faInstagram, link: '#' },
    { icon: faTwitter, link: '#' },
    { icon: faYoutube, link: '#' },
    { icon: faWikipediaW, link: '#' },
];

function SocialMediaIcons() {
    return (
        <div className="social-icons-band py-2 px-2 bg-light position-fixed top-10 me-2 shadow end-0 d-flex flex-column text-center">
            <div className="mt-1">
                {socialMedia.map((item) => (
                    <div className="mb-2">
                        <a
                            href={item.link}
                            className="d-inline-block icon_font_size  text-info"
                        >
                            {' '}
                            <FontAwesomeIcon icon={item.icon} size="2x" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SocialMediaIcons;
