import * as React from 'react';
import '../../styles/main.scss';
import Navigation from './navigation/Navigation';
import Footer from './footer';
import SocialMediaIcons from '../socialMediaIcons';

function Layout({ children }) {
    return (
        <>
            <Navigation />
            <main className="position-relative">
                <SocialMediaIcons />
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
