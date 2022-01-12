import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
    faWikipediaW,
} from '@fortawesome/free-brands-svg-icons';

const socialMedia = [
    { icon: faFacebook, link: '#' },
    { icon: faInstagram, link: '#' },
    { icon: faTwitter, link: '#' },
    { icon: faYoutube, link: '#' },
    { icon: faWikipediaW, link: '#' },
];

function Footer() {
    return (
        <footer className="bg-dark mt-5">
            <div className="container  py-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="row icons__bar">
                            {socialMedia.map((item) => (
                                <div className="align-items-center col d-flex justify-content-center">
                                    <a
                                        href={item.link}
                                        className="d-inline-block icon_font_size"
                                    >
                                        {' '}
                                        <FontAwesomeIcon
                                            icon={item.icon}
                                            size="2x"
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-8">
                        <p className="text-primary text-right">
                            Debruces a mi derechos reservados
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
