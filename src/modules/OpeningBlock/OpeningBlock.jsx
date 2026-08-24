import './OpeningBlock.css';

const OpeningBlock = ({ onOpen }) => {
    return (
        <section className="opening-block">
            <div className="opening-block__content">

                <div className="opening-block__top-heart">
                    ♡
                </div>

                <p className="opening-block__eyebrow">
                    ПРИГЛАШЕНИЕ НА СВАДЬБУ
                </p>

                <h1 className="opening-block__names">
                    Аскар & Азем
                </h1>

                <div className="opening-block__divider">
                    <span />
                    <span className="opening-block__heart">
                        ♡
                    </span>
                    <span />
                </div>

                <p className="opening-block__intro">
                    МЫ БУДЕМ РАДЫ РАЗДЕЛИТЬ
                    <br />
                    ЭТОТ ОСОБЕННЫЙ ДЕНЬ С ВАМИ
                </p>

                <button
                    className="opening-block__button"
                    type="button"
                    onClick={onOpen}
                >
                    ОТКРЫТЬ ПРИГЛАШЕНИЕ
                    <span>♡</span>
                </button>

                {/*<div className="opening-block__photo">*/}
                {/*    <img*/}
                {/*        src={headerImage}*/}
                {/*        alt="Аскар и Азем"*/}
                {/*    />*/}
                {/*</div>*/}

            </div>
        </section>
    );
};

export default OpeningBlock;