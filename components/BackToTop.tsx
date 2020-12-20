import React from "react";
import { useState } from "react";
import { useEffect } from "react";

interface BackToTopButtonProps {

}

const BackToTopButton = (props: BackToTopButtonProps) => {

    const [windowLoaded, setWindowLoaded] = useState(false)
    const [scrollTop, setScrollTop] = useState(0);

    console.log('scroll top:', scrollTop)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowLoaded(true)
        }
    }, [typeof window])


    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
            // setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    if (!windowLoaded) return null
    // if (scrollTop < 300) return null

    return (
        <button onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }} className="backToTop appear">
            ▲

            <style jsx>
                {`
                    .appear {
                        opacity:${scrollTop < 300 ? "0" : "1"};
                        transition: opacity 0.2s;
                    }
                `}
            </style>

        </button>
    );
}
export default BackToTopButton;