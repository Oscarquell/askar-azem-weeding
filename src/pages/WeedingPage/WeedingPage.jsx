import React, { useEffect, useRef, useState } from 'react';import HeaderBlock from "../../modules/HeaderBlock/HeaderBlock";
import CountdownBlock from "../../modules/CountdownBlock/CountdownBlock";
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

    useEffect(() => {
        if (!isOpened) {
            document.body.style.position = 'fixed';
            document.body.style.top = '0';
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
        };
    }, [isOpened]);

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

                setIsPlaying(true);

            } catch (error) {
                console.error('Музыка не запустилась:', error);
            }
        }

        setIsOpened(true);

        requestAnimationFrame(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant',
            });
        });
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

            {/*<RevealOnScroll>*/}
            {/*    <RSVPBlock />*/}
            {/*</RevealOnScroll>*/}

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