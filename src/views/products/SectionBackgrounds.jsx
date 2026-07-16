// SectionBackgrounds.jsx


export function SoftWaveBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_5%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_6%_92%,rgba(34,211,238,0.16),transparent_36%),linear-gradient(135deg,#ffffff_0%,#fbfdff_48%,#f3f8ff_100%)]" />

        <div className="soft-wave soft-wave-one" />
        <div className="soft-wave soft-wave-two" />
      </div>

      <style>
        {`
          .soft-wave {
            position: absolute;
            left: -10%;
            width: 120%;
            height: 260px;
            border-radius: 50%;
            opacity: 0.32;
            filter: blur(22px);
            animation: softWaveMove 12s ease-in-out infinite alternate;
          }

          .soft-wave-one {
            bottom: 4%;
            background: linear-gradient(
              90deg,
              rgba(34,211,238,0.18),
              rgba(59,130,246,0.10),
              transparent
            );
          }

          .soft-wave-two {
            top: 20%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(147,197,253,0.14),
              rgba(255,255,255,0.65)
            );
            animation-delay: 2s;
          }

          @keyframes softWaveMove {
            0% {
              transform: translateX(-2%) translateY(0) rotate(-2deg);
            }
            100% {
              transform: translateX(3%) translateY(-18px) rotate(2deg);
            }
          }
        `}
      </style>
    </>
  );
}
export function ImageGradientBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-white">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.96)_0%,rgba(246,251,255,0.92)_45%,rgba(238,247,255,0.96)_100%)]" />

        {/* Soft Blue Blobs */}
        <div className="image-bg-blob image-bg-blob-one" />
        <div className="image-bg-blob image-bg-blob-two" />
      </div>

      <style>
        {`
          .image-bg-blob {
            position: absolute;
            border-radius: 999px;
            filter: blur(70px);
            opacity: 0.45;
            animation: imageBgFloat 13s ease-in-out infinite alternate;
          }

          .image-bg-blob-one {
            width: 420px;
            height: 420px;
            left: -120px;
            bottom: -100px;
            background: rgba(34,211,238,0.24);
          }

          .image-bg-blob-two {
            width: 360px;
            height: 360px;
            right: -100px;
            top: -90px;
            background: rgba(59,130,246,0.22);
            animation-delay: 2s;
          }

          @keyframes imageBgFloat {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
            }
            100% {
              transform: translate3d(22px, -24px, 0) scale(1.08);
            }
          }
        `}
      </style>
    </>
  );
}

export function LinePatternBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#F7F7FF]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f6f4ff_45%,#f8fbff_100%)]" />

        <svg
          className="line-pattern-bg absolute inset-0 h-full w-full opacity-70"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >
          <path d="M-120 130 C 180 210, 370 310, 560 470 C 710 595, 740 720, 860 790" />
          <path d="M-80 470 C 170 560, 240 760, 385 790 C 500 812, 510 650, 420 565" />
          <path d="M700 -40 C 900 115, 1130 235, 1380 255 C 1530 267, 1625 198, 1680 95" />
          <path d="M1260 -80 C 1235 75, 1308 160, 1420 145 C 1535 130, 1545 15, 1505 -60" />
          <path d="M1510 880 C 1480 710, 1540 600, 1650 535" />
        </svg>
      </div>

      <style>
        {`
          .line-pattern-bg path {
            fill: none;
            stroke: rgba(255,255,255,0.95);
            stroke-width: 3;
            stroke-linecap: round;
            animation: linePatternFloat 11s ease-in-out infinite alternate;
          }

          .line-pattern-bg path:nth-child(2) {
            animation-delay: 1.5s;
          }

          .line-pattern-bg path:nth-child(3) {
            animation-delay: 2.5s;
          }

          .line-pattern-bg path:nth-child(4) {
            animation-delay: 3.5s;
          }

          .line-pattern-bg path:nth-child(5) {
            animation-delay: 4.5s;
          }

          @keyframes linePatternFloat {
            0% {
              transform: translateY(0px);
            }
            100% {
              transform: translateY(-18px);
            }
          }
        `}
      </style>
    </>
  );
}

export function GrainGradientBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_15%,rgba(147,197,253,0.45),transparent_35%),radial-gradient(circle_at_8%_92%,rgba(125,211,252,0.32),transparent_34%),linear-gradient(135deg,#edf4ff_0%,#ffffff_48%,#ffffff_100%)]" />

        <div className="grain-layer absolute inset-0 opacity-[0.18]" />
      </div>

      <style>
        {`
          .grain-layer {
            background: transparent;
            background-size: 6px 6px, 9px 9px;
            animation: grainMove 6s steps(4) infinite;
          }

          @keyframes grainMove {
            0% {
              transform: translate(0, 0);
            }
            25% {
              transform: translate(-1%, 1%);
            }
            50% {
              transform: translate(1%, -1%);
            }
            75% {
              transform: translate(-1%, -1%);
            }
            100% {
              transform: translate(0, 0);
            }
          }
        `}
      </style>
    </>
  );
}

export function BlurPastelBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f6fbff_45%,#eef7ff_100%)]" />

        <div className="pastel-blob pastel-blob-one" />
        <div className="pastel-blob pastel-blob-two" />
        <div className="pastel-blob pastel-blob-three" />
      </div>

      <style>
        {`
          .pastel-blob {
            position: absolute;
            border-radius: 999px;
            filter: blur(70px);
            opacity: 0.55;
            animation: pastelFloat 13s ease-in-out infinite alternate;
          }

          .pastel-blob-one {
            width: 420px;
            height: 420px;
            left: -120px;
            bottom: -90px;
            background: rgba(34,211,238,0.28);
          }

          .pastel-blob-two {
            width: 360px;
            height: 360px;
            right: -90px;
            top: -80px;
            background: rgba(59,130,246,0.25);
            animation-delay: 2s;
          }

          .pastel-blob-three {
            width: 340px;
            height: 340px;
            left: 45%;
            top: 35%;
            background: rgba(196,181,253,0.18);
            animation-delay: 4s;
          }

          @keyframes pastelFloat {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
            }
            100% {
              transform: translate3d(20px, -24px, 0) scale(1.08);
            }
          }
        `}
      </style>
    </>
  );
}
