import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Smooth GSAP quickTo tracking
    let xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    let yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    // Hover effect for clickable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".hover-lift") ||
        target.closest(".flow-card") ||
        target.closest(".suite-card")
      ) {
        gsap.to(cursor, { scale: 2.5, backgroundColor: "rgba(14, 165, 233, 0.4)", duration: 0.3 });
      } else {
        gsap.to(cursor, { scale: 1, backgroundColor: "var(--sky)", duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        backgroundColor: "var(--sky)",
        pointerEvents: "none",
        zIndex: 99999,
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 15px rgba(25, 174, 252, 0.5)",
      }}
      className="custom-cursor d-none d-lg-block"
    />
  );
}
