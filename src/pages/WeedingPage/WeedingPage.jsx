import React from 'react';
import HeaderBlock from "../../modules/HeaderBlock/HeaderBlock";
import './WeedingPage.css'
import RSVPBlock from "../../modules/RSVPBlock/RSVPBlock";
import CountdownBlock from "../../modules/CountdownBlock/CountdownBlock";
import LocationBlock from "../../modules/LocationBlock/LocationBlock";
import FooterBlock from "../../modules/FooterBlock/FooterBlock";


const WeedingPage = () => {
    return (
        <main className="wedding-page">
            <HeaderBlock />
            <CountdownBlock />
            <RSVPBlock />
            <LocationBlock />
            <FooterBlock />
        </main>
    );
};

export default WeedingPage;