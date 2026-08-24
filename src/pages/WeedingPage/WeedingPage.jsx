import React, { useRef, useState } from 'react';
import HeaderBlock from "../../modules/HeaderBlock/HeaderBlock";
import CountdownBlock from "../../modules/CountdownBlock/CountdownBlock";
import RSVPBlock from "../../modules/RSVPBlock/RSVPBlock";
import LocationBlock from "../../modules/LocationBlock/LocationBlock";
import FooterBlock from "../../modules/FooterBlock/FooterBlock";
import OpeningBlock from "../../modules/OpeningBlock/OpeningBlock";
import MusicPlayer from "../../modules/MusicPlayer/MusicPlayer";
import RevealOnScroll from '../../components/RevealOnScroll/RevealOnScroll';
import './WeedingPage.css';


const WeedingPage = () => {

    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);

    const [isOpened, setIsOpened] = useState(
        () => sessionStorage.getItem('wedding-opened') === 'true'
    );

    const handleOpenInvitation = async () => {
        sessionStorage.setItem('wedding-opened', 'true');

        const audio = audioRef.current;

        if (audio) {
            try {
                audio.volume = 0;

                await audio.play();

                const targetVolume = 0.7;
                const duration = 3000;
                const steps = 60;
                const interval = duration / steps;
                const volumeStep = targetVolume / steps;

                let currentVolume = 0;

                const fadeIn = setInterval(() => {
                    currentVolume += volumeStep;

                    if (currentVolume >= targetVolume) {
                        audio.volume = targetVolume;
                        clearInterval(fadeIn);
                        return;
                    }

                    audio.volume = currentVolume;
                }, interval);

            } catch (error) {
                console.error('Музыка не запустилась:', error);
            }
        }

        setIsOpened(true);
    };

    const handleToggleMusic = async () => {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

        if (audio.paused) {
            try {
                await audio.play();
                setIsPlaying(true);
            } catch (error) {
                console.error('Музыка не запустилась:', error);
            }

            return;
        }

        audio.pause();
        setIsPlaying(false);
    };

    return (
        <main className="wedding-page">

            {!isOpened && (
                <OpeningBlock onOpen={handleOpenInvitation} />
            )}

            {isOpened && (
                <MusicPlayer
                    audioRef={audioRef}
                    isPlaying={isPlaying}
                    onToggle={handleToggleMusic}
                />
            )}

            <RevealOnScroll>
                <HeaderBlock />
            </RevealOnScroll>

            <RevealOnScroll>
                <CountdownBlock />
            </RevealOnScroll>

            <RevealOnScroll>
                <RSVPBlock />
            </RevealOnScroll>

            <RevealOnScroll>
                <LocationBlock />
            </RevealOnScroll>

            <RevealOnScroll>
                <FooterBlock />
            </RevealOnScroll>

            <audio
                ref={audioRef}
                src="/music/ordinary.mp3.mp3"
                loop
                preload="auto"
            />
        </main>
    );
};

export default WeedingPage;