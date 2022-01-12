import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const navInfo = [
    { link: '/', title: 'Inicio' },
    { link: '/musica', title: 'Música' },
    { link: '/videos', title: 'Videos' },
    { link: '/bio', title: 'Bio' },
    { link: '/apoyanos', title: 'apóyanos' },
];

function Navigation() {
    return (
        <nav className="theme_bg navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link to="/">
                    <StaticImage
                        src="../../../../static/img/logo.jpg"
                        className="w-25 logo_img"
                        width={250}
                        alt="banda logo"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {navInfo.map((item) => (
                            <li className="nav-item">
                                <Link to={item.link} className="nav-link">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
