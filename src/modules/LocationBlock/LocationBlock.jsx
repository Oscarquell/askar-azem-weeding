import './LocationBlock.css';

const LocationBlock = () => {
    return (
        <section className="location-block">
            <div className="location-block__content">

                <div className="location-block__top-divider">
                    <span />
                    <span className="location-block__heart">
        ♡
    </span>
                    <span />
                </div>

                <p className="location-block__eyebrow">
                    МЕСТО НАШЕЙ ВСТРЕЧИ
                </p>

                <h2 className="location-block__title">
                    Дом торжеств
                    <br />
                    «Вавилон»
                </h2>

                <div className="location-block__divider">
                    <span />
                    <span className="location-block__heart">
                        ♡
                    </span>
                    <span />
                </div>

                <p className="location-block__address">
                    Проспект Жибек-Жолу, 402
                    <br />
                    Бишкек
                </p>

                <p className="location-block__time">
                    Начало в 16:00
                </p>

                <a
                    className="location-block__button"
                    href="https://go.2gis.com/mnyW0"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ПОКАЗАТЬ НА КАРТЕ
                </a>

            </div>
        </section>
    );
};

export default LocationBlock;