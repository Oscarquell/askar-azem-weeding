import { useEffect, useRef, useState } from 'react';
import './RevealOnScroll.css';

const RevealOnScroll = ({ children, className = '' }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal-on-scroll ${isVisible ? 'reveal-on-scroll--visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;