import * as React from 'react';
import { Link } from 'gatsby';

const videoGridData = [
    { link: 'https://www.youtube.com/embed/tJ55fohiR4g' },
    { link: 'https://www.youtube.com/embed/ta2nvtLAaOk' },
    { link: 'https://www.youtube.com/embed/BS0iBa_UAGs' },
    { link: 'https://www.youtube.com/embed/ZD3eOZZFIh8' },
];

function OurVideos() {
    return (
        <section className="videos my-5">
            <div className="container">
                <h3 className="font-weight-bold pt-2 text-center text-uppercase my-5">
                    Videos
                </h3>
                {/* featured video */}

                <div className="ratio ratio-16x9 mb-4 m-auto w-75">
                    <iframe
                        allowFullScreen
                        src="https://www.youtube.com/embed/ta2nvtLAaOk"
                    />
                </div>
                {/* video grid */}

                <div className="ml-auto mr-auto row w-100 videos__video-strip">
                    {videoGridData.map((videoData) => (
                        <div className="col-6 mb-2 col-md-3">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe
                                    allowFullScreen
                                    className="embed-responsive-item"
                                    src={videoData.link}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center my-5">
                <Link className="btn btn-primary" to="/videos">
                    Más videos
                </Link>
            </div>
            <div className="container my-5">
                <hr />
            </div>
        </section>
    );
}

export default OurVideos;
