import { useEffect, useState } from 'react';
import './CountdownBlock.css';

const WEDDING_DATE = new Date('2026-09-26T16:00:00');

const getTimeLeft = () => {
    const difference = WEDDING_DATE.getTime() - Date.now();

    if (difference <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
            (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
            (difference / 1000) % 60
        ),
    };
};

const CountdownBlock = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="countdown-block">
            <div className="countdown-block__content">

                <p className="countdown-block__eyebrow">
                    ДО НАШЕЙ ВСТРЕЧИ
                </p>

                <div className="countdown-block__timer">

                    <div className="countdown-block__item">
                        <span className="countdown-block__number">
                            {timeLeft.days}
                        </span>

                        <span className="countdown-block__label">
                            ДНЕЙ
                        </span>
                    </div>

                    <span className="countdown-block__separator">
                        :
                    </span>

                    <div className="countdown-block__item">
                        <span className="countdown-block__number">
                            {String(timeLeft.hours).padStart(2, '0')}
                        </span>

                        <span className="countdown-block__label">
                            ЧАСОВ
                        </span>
                    </div>

                    <span className="countdown-block__separator">
                        :
                    </span>

                    <div className="countdown-block__item">
                        <span className="countdown-block__number">
                            {String(timeLeft.minutes).padStart(2, '0')}
                        </span>

                        <span className="countdown-block__label">
                            МИНУТ
                        </span>

                    </div>

                    <span className="countdown-block__separator">
                        :
                    </span>

                    <div className="countdown-block__item">
                        <span className="countdown-block__number">
                            {String(timeLeft.seconds).padStart(2, '0')}
                        </span>

                        <span className="countdown-block__label">
                            СЕКУНД
                        </span>
                    </div>

                </div>

                <div className="countdown-block__divider">
                    <span />
                </div>

            </div>
        </section>
    );
};

export default CountdownBlock;