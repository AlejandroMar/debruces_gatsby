import * as React from 'react';
import { Link } from '../../.cache/gatsby-browser-entry';

function CallToAction({ msg, title, subtitle, link }) {
    return (
        <section>
            <div className="container text-center mb-5 mt-5">
                {title && <h3 className="text-uppercase fw-bold">{title}</h3>}
                {subtitle && <p className="">{subtitle}</p>}
                <Link className="btn btn-primary" to={link}>
                    {msg}
                </Link>
            </div>
        </section>
    );
}

export default CallToAction;
