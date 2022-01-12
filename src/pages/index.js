import * as React from 'react';
import Carousel from '../components/carousel';
import LastAlbumPhoto from '../components/lastAlbumPhoto';
import OurMusic from '../components/ourMusic';

import indexPageData from '../content/index.yml';
import CallToAction from '../components/callToAction';
import Separator from '../components/separator';
import OurVideos from '../components/ourVideos';
import Bio from '../components/bio';

function Index() {
    console.log(indexPageData);
    const { carousel, lastAlbumPhoto } = indexPageData;
    return (
        <main className="position-relative">
            <Carousel carousel={carousel} />
            <LastAlbumPhoto lastAlbumPhoto={lastAlbumPhoto} />
            <OurMusic />
            <Separator line={true} />
            <CallToAction
                msg="Contacto"
                subtitle="Escríbenos"
                title="Contacto"
            />
            <Separator line={true} />
            <OurVideos />
            <CallToAction msg="Ir a la página" title="Quieres apoyarnos?" />
            <Separator line={true} />
            <Bio />
            <Separator line={true} />
            <CallToAction
                msg="Contacto"
                subtitle="Escríbenos"
                title="Contacto"
            />
            <Separator />
        </main>
    );
}

export default Index;
