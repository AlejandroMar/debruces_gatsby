import * as React from 'react';

function CallToAction({ msg, title, subtitle }) {
    return (
        <section>
            <div className="container text-center mb-5 mt-5">
                {title && <h3 className="text-uppercase fw-bold">{title}</h3>}
                {subtitle && <p className="">{subtitle}</p>}
                <button className="btn btn-primary">{msg}</button>
            </div>
        </section>
    );
}

export default CallToAction;
