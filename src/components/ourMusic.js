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

const ourMusicData = [
    {
        name: 'Spotify',
        link: 'https://open.spotify.com/artist/0Mib7yfd1ByhIhA1DmEeMg?si=VxMlef_8Q0eEyC439PAjhQ',
        icon: faSpotify,
    },
    {
        name: 'youtube',
        link: 'https://www.youtube.com/user/debrucesami/playlists?view=50&sort=dd&shelf_id=1679',
        icon: faYoutube,
    },
    {
        name: 'Google Play',
        link: 'https://play.google.com/store/music/artist?id=A3dzbwydkvsqeggbgsi543tnibe',
        icon: faGooglePlay,
    },
    {
        name: 'Itunes',
        link: 'https://itunes.apple.com/mx/artist/de-bruces-a-mi/216272149',
        icon: faItunes,
    },
    {
        name: 'Deezer',
        link: 'https://www.deezer.com/es/artist/132317?app_id=100023',
        icon: faDeezer,
    },
    {
        name: 'CD',
        link: 'https://api.whatsapp.com/send?phone=573504867228',
        icon: faCompactDisc,
    },
];

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
                        {ourMusicData.map((data) => (
                            <div className="align-items-center col d-flex justify-content-center">
                                <a
                                    href={data.link}
                                    className="d-inline-block icon_font_size  text-dark"
                                >
                                    {' '}
                                    <FontAwesomeIcon
                                        icon={data.icon}
                                        size="2x"
                                    />
                                </a>
                            </div>
                        ))}
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
