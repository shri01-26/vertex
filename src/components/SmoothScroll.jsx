import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SmoothScroll() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.6,
            easing: (t) => 1 - Math.pow(1 - t, 4),
            smoothWheel: true,
            wheelMultiplier: 0.65,
            touchMultiplier: 1.1,
            lerp: 0.075,
            infinite: false,
        });

        // Keep GSAP ScrollTrigger in sync with Lenis so pinned/scrubbed
        // sections follow the smooth scroll without lag or jitter.
        lenis.on("scroll", ScrollTrigger.update);

        const raf = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(raf);
            lenis.off("scroll", ScrollTrigger.update);
            lenis.destroy();
        };
    }, []);

    return null;
}

export default SmoothScroll;