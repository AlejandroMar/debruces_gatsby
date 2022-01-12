import * as React from 'react';

function Separator({ line }) {
    return line === true ? (
        <div className="container my-5">
            <hr />
        </div>
    ) : (
        <div className="container separator-height" />
    );
}

export default Separator;
