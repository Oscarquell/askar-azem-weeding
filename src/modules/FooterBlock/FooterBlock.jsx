import './FooterBlock.css';

const FooterBlock = () => {
    return (
        <footer className="footer-block">
            <div className="footer-block__content">

                <div className="footer-block__divider">
                    <span />
                    <span className="footer-block__heart">
                        ♡
                    </span>
                    <span />
                </div>

                <p className="footer-block__signature">
                    С ЛЮБОВЬЮ,
                    <br />
                    АСКАР & АЗЕМ
                </p>

                <p className="footer-block__final">
                    До встречи!
                </p>

                <div className="footer-block__heart-bottom">
                    ♡
                </div>

                <p className="footer-block__date">
                    26.09.2026
                </p>

            </div>
        </footer>
    );
};

export default FooterBlock;