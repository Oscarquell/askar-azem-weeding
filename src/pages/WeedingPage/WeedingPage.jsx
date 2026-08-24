import React from 'react';
import HeaderBlock from "../../modules/HeaderBlock/HeaderBlock";
import './WeedingPage.css'
import RSVPBlock from "../../modules/RSVPBlock/RSVPBlock";
import CountdownBlock from "../../modules/CountdownBlock/CountdownBlock";


const WeedingPage = () => {
    return (
        <main className="wedding-page">
            <HeaderBlock />
            <CountdownBlock />
            <RSVPBlock />
        </main>
    );
};

export default WeedingPage;