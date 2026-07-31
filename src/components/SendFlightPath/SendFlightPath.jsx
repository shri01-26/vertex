import { useId } from "react";
import "./SendFlightPath.css";

/* Runs through the icon's centre, so the circle always covers the line's tip — no gap. */
const FLIGHT_PATH =
  "M6 122C42 64 86 44 112 51C131 56 137 73 126 79C115 85 103 76 107 59C112 40 140 28 172 16";

/**
 * Curved dashed flight path that draws itself from bottom-left to top-right,
 * with a paper-plane send icon landing at the end.
 * Pure SVG + CSS, no animation libraries.
 */
export default function SendFlightPath({
  color = "#2588F0",
  className = "",
  label = "Message in flight",
}) {
  const maskId = `send-flight-mask-${useId()}`;

  return (
    <div
      className={`send-flight ${className}`}
      style={{ "--send-flight-color": color }}
      role="img"
      aria-label={label}
    >
      <svg
        className="send-flight__svg"
        viewBox="0 0 200 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          {/* The mask sweeps along the curve, revealing the line as it goes. */}
          <mask id={maskId} maskUnits="userSpaceOnUse">
            <path
              className="send-flight__reveal"
              d={FLIGHT_PATH}
              stroke="#fff"
              strokeWidth="3.5"
              strokeLinecap="round"
              pathLength="1"
              strokeDasharray="1 1"
            />
          </mask>
        </defs>

        {/* Line and icon share this group's opacity, so they fade out together. */}
        <g className="send-flight__stage">
          <path
            className="send-flight__path"
            d={FLIGHT_PATH}
            mask={`url(#${maskId})`}
            stroke="var(--send-flight-color)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="0.1 4.5"
          />

          <g className="send-flight__icon" transform="translate(0 -12)">
            <circle
              className="send-flight__halo"
              cx="168"
              cy="30"
              r="32"
              fill="var(--send-flight-color)"
            />
            <circle cx="168" cy="30" r="25" fill="var(--send-flight-color)" />
            <path
              d="M175.6 25.1 L161.6 29.4c-.8.3-.8 1.4 0 1.6l5.3 1.7 1.7 5.3c.3.8 1.4.8 1.6 0l4.3-14c.2-.7-.5-1.3-1.2-1z"
              fill="#fff"
              transform="translate(0 -2) translate(168 30) scale(1.7) translate(-168 -30)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
