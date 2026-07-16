"use client";

import { useLayoutEffect, useRef } from "react";
import "./WatermarkTrail.css";

export default function WatermarkTrail({ text = "#Vertex Suite" }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const fitText = () => {
      const container = containerRef.current;
      const el = textRef.current;
      if (!container || !el) return;

      const containerHeight = container.clientHeight;
      const cs = window.getComputedStyle(el);
      const horizontalPadding =
        parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
      const availableWidth = container.clientWidth - horizontalPadding;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.font = `${cs.fontWeight} 100px ${cs.fontFamily}`;
      const textWidth = ctx.measureText(el.textContent).width;
      if (!textWidth) return;

      const widthFit = (availableWidth / textWidth) * 100;
      const heightFit = containerHeight / 0.82;
      el.style.fontSize = `${Math.min(widthFit, heightFit)}px`;
    };

    fitText();
    window.addEventListener("resize", fitText);
    return () => window.removeEventListener("resize", fitText);
  }, [text]);

  return (
    <section ref={containerRef} className="watermark-trail" aria-hidden="true">
      <div ref={textRef} className="watermark-trail__text">
        {text}
      </div>
    </section>
  );
}
