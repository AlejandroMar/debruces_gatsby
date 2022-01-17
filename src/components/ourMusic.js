import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSpotify,
    faYoutube,
    faGooglePlay,
    faItunes,
    faDeezer,
} from '@fortawesome/free-brands-svg-icons';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

function OurMusic() {
    return (
        <section>
            <div className="container mb-5 our-music__title-and-channels">
                <h3 className="fw-bold mt-5 text-center text-uppercase">
                    Escuchanos
                </h3>
                <p className="fw-normal mb-2 mt-2 text-center">
                    Plataformas digitales
                </p>
                <div className="container pb-4 pt-4">
                    {/*our music*/}

                    <div className="icons__bar row">
                        <div className="align-items-center col d-flex justify-content-center">
                            <a
                                href="https://open.spotify.com/artist/0Mib7yfd1ByhIhA1DmEeMg?si=VxMlef_8Q0eEyC439PAjhQ"
                                className="d-inline-block icon_font_size  text-dark"
                            >
                                {' '}
                                <FontAwesomeIcon icon={faSpotify} size="2x" />
                                <i className="d-inline-block fa-lg fa-spotify fab" />{' '}
                            </a>
                        </div>

                        <div className="align-items-center col d-flex justify-content-center">
                            <a
                                href="https://www.youtube.com/user/debrucesami/playlists?view=50&sort=dd&shelf_id=1679"
                                className="d-inline-block icon_font_size  text-dark"
                            >
                                {' '}
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                                <i className="d-inline-block fa-lg fa-youtube fab" />{' '}
                            </a>
                        </div>

                        <div className="align-items-center col d-flex justify-content-center">
                            <a
                                href="https://play.google.com/store/music/artist?id=A3dzbwydkvsqeggbgsi543tnibe"
                                className="d-inline-block icon_font_size  text-dark"
                            >
                                {' '}
                                <FontAwesomeIcon
                                    icon={faGooglePlay}
                                    size="2x"
                                />
                                <i className="d-inline-block fa-google-play fa-lg fab" />{' '}
                            </a>
                        </div>

                        <div className="align-items-center col d-flex justify-content-center">
                            <a
                                href="https://itunes.apple.com/mx/artist/de-bruces-a-mi/216272149"
                                className="d-inline-block icon_font_size  text-dark"
                            >
                                {' '}
                                <FontAwesomeIcon icon={faItunes} size="2x" />
                                <i className="d-inline-block fa-itunes fa-lg fab" />{' '}
                            </a>
                        </div>
                        <div className="align-items-center col d-flex justify-content-center">
                            <a
                                href="https://www.deezer.com/es/artist/132317?app_id=100023"
                                className="d-inline-block icon_font_size  text-dark"
                            >
                                {' '}
                                <FontAwesomeIcon icon={faDeezer} size="2x" />
                                <i className="d-inline-block fa-deezer fa-lg fab" />{' '}
                            </a>
                        </div>
                        <div className="align-items-center col d-flex justify-content-center">
                            <a
                                href="https://api.whatsapp.com/send?phone=573504867228"
                                className="d-inline-block icon_font_size  text-dark"
                            >
                                {' '}
                                <FontAwesomeIcon
                                    icon={faCompactDisc}
                                    size="2x"
                                />
                                <i className="d-inline-block fa-compact-disc fa-lg fas" />{' '}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-center my-4 ">
                <iframe
                    src="https://open.spotify.com/embed/album/3KnKXcmHFsu5GsDREoxtQW"
                    width="100%"
                    height="180"
                    frameBorder="0"
                    allowTransparency="true"
                    allow="encrypted-media"
                />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <Link className="btn btn-primary" to="/musica">
                    Más música
                </Link>
            </div>
        </section>
    );
}

export default OurMusic;
