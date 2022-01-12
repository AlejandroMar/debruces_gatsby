import * as React from 'react';

function LastAlbumPhoto({ lastAlbumPhoto }) {
    return (
        <div className="mt-5 align-items-center d-flex flex-column justify-content-center">
            <img className="pt-5 w-25" src={lastAlbumPhoto.image} alt="" />
        </div>
    );
}

export default LastAlbumPhoto;
