import './HeaderBlock.css';
import headerImage from '../../assets/Askar-Azem-Header-Block-Image-2.JPG';

const HeaderBlock = () => {
    return (
        <section className="header-block">
            <div className="header-block__content">

                <p className="header-block__eyebrow">
                    ПРИГЛАШАЕМ ВАС НА
                </p>

                <h1 className="header-block__title">
                    Свадьбу
                </h1>

                <div className="header-block__divider">
                    <span />
                    <span className="header-block__heart">♡</span>
                    <span />
                </div>

                <p className="header-block__intro">
                    Мы хотим разделить этот важный день
                    <br />
                    с теми, кто нам дорог.
                </p>

                <div className="header-block__photo">
                    <img
                        src={headerImage}
                        alt="Аскар и Азем"
                    />
                </div>

                <p className="header-block__wish">
                    Будем рады видеть вас
                    <br />
                    на нашем празднике!
                </p>

                <div className="header-block__small-heart">
                    ♡
                </div>

                <div className="header-block__date-section">

                    <p className="header-block__save-date">
                        СОХРАНИТЕ ДАТУ
                    </p>

                    <div className="header-block__date">
                        26.09.2026
                    </div>

                    <div className="header-block__time">
                        в 16:00
                    </div>

                    <div className="header-block__date-divider">
                        <span />
                        <span className="header-block__heart">
                            ♡
                        </span>
                        <span />
                    </div>

                </div>

                <p className="header-block__bottom-text">
                    УРМАТТУУ КУДАЛАР,
                    <br />
                    НАМ ОСОБЕННО ПРИЯТНО РАЗДЕЛИТЬ
                    <br />
                    С ВАМИ ЭТОТ ВАЖНЫЙ И СЧАСТЛИВЫЙ ДЕНЬ.
                    <br />
                    ОТ ВСЕЙ ДУШИ ПРИГЛАШАЕМ ВАС
                    <br />
                    НА СВАДЬБУ НАШИХ ДЕТЕЙ,
                    <br />
                    ЧТОБЫ ВМЕСТЕ РАЗДЕЛИТЬ ИХ РАДОСТЬ.
                </p>

                <p className="header-block__final">
                    Ждём вас!
                </p>

                <div className="header-block__final-heart">
                    ♡
                </div>

            </div>
        </section>
    );
};

export default HeaderBlock;