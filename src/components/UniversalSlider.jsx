import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Deep check to ensure an item is not empty / blank
function isItemEmpty(item) {
  if (!item) return true;

  if (typeof item === "object") {
    // If it is a React JSX element, it is not empty
    if (item.$$typeof) return false;

    const textKeys = [
      "title", "text", "desc", "description", "subtitle",
      "sub", "name", "label", "caption", "heading",
    ];

    let hasContent = false;
    for (const key of Object.keys(item)) {
      const val = item[key];
      if (val === null || val === undefined) continue;

      if (textKeys.includes(key) && typeof val === "string" && val.trim() !== "") {
        hasContent = true;
        break;
      }

      if (key === "bullets" && Array.isArray(val) && val.length > 0) {
        if (val.some((b) => typeof b === "string" && b.trim() !== "")) {
          hasContent = true;
          break;
        }
      }

      if ((key === "items" || key === "steps") && Array.isArray(val) && val.length > 0) {
        if (val.some((subItem) => !isItemEmpty(subItem))) {
          hasContent = true;
          break;
        }
      }
    }

    if (!hasContent) {
      const stylingKeys = [
        "bg", "color", "icon", "img", "image", "borderColor",
        "className", "style", "colorBg", "active", "id", "link", "to", "href",
      ];
      const otherKeys = Object.keys(item).filter((k) => !stylingKeys.includes(k));
      if (otherKeys.length === 0) return true;

      hasContent = otherKeys.some((key) => {
        const val = item[key];
        if (val === null || val === undefined) return false;
        if (typeof val === "string" && val.trim() !== "") return true;
        if (typeof val === "boolean") return true;
        if (typeof val === "number") return true;
        if (typeof val === "object") return !isItemEmpty(val);
        return false;
      });
    }

    return !hasContent;
  }

  if (typeof item === "string") return item.trim() === "";
  return false;
}

export default function UniversalSlider({ items, renderCard, visibleDesktop = 3 }) {
  const filteredItems = (items || []).filter((item) => !isItemEmpty(item));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(visibleDesktop);
  const [trackHovered, setTrackHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const startXRef = useRef(0);
  const autoScrollRef = useRef(null);

  // Responsive visible cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) setVisibleCards(visibleDesktop);
      else if (window.innerWidth >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visibleDesktop]);

  const maxIndex = Math.max(0, filteredItems.length - visibleCards);

  // Cap currentIndex when cards/viewport change
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-scroll — pauses only when hovering the card track or dragging
  useEffect(() => {
    if (maxIndex <= 0) return;
    if (trackHovered || isDragging) {
      clearInterval(autoScrollRef.current);
      return;
    }
    autoScrollRef.current = setInterval(goNext, 4500);
    return () => clearInterval(autoScrollRef.current);
  }, [trackHovered, isDragging, goNext, maxIndex]);

  // ── Drag handlers (only on the track, not the buttons) ──
  const handleTrackMouseDown = (e) => {
    // Ignore clicks originating on the nav buttons
    if (e.target.closest(".slider-nav-btn")) return;
    setIsDragging(true);
    startXRef.current = e.clientX;
  };

  const handleTrackMouseMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - startXRef.current);
  };

  const handleTrackMouseUp = (e) => {
    if (!isDragging) return;
    const offset = e.clientX - startXRef.current;
    setIsDragging(false);
    setDragOffset(0);
    if (offset < -60) goNext();
    else if (offset > 60) goPrev();
  };

  const handleTrackMouseLeave = (e) => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
    setTrackHovered(false);
  };

  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.touches[0].clientX - startXRef.current);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (dragOffset < -60) goNext();
    else if (dragOffset > 60) goPrev();
    setDragOffset(0);
  };

  if (filteredItems.length === 0) return null;

  // If all items fit without scrolling, just render a static grid
  if (filteredItems.length <= visibleCards) {
    return (
      <div
        className="row g-4 justify-content-center"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className={visibleDesktop === 4 ? "col-lg-3 col-md-6" : "col-lg-4 col-md-6"}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {renderCard(item, index)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: "100%", userSelect: "none", padding: "0 52px" }}>
      <style>{`
        .slider-nav-btn {
          position: absolute !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          width: 44px !important;
          height: 44px !important;
          border-radius: 50% !important;
          background: #ffffff !important;
          color: #19aefc !important;
          border: 1.5px solid #cbd5e1 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.10) !important;
          cursor: pointer !important;
          z-index: 30 !important;
          transition: background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s !important;
          padding: 0 !important;
          outline: none !important;
        }
        .slider-nav-btn:hover {
          background: #19aefc !important;
          color: #ffffff !important;
          border-color: #19aefc !important;
          box-shadow: 0 6px 20px rgba(25,174,252,0.35) !important;
          transform: translateY(-50%) scale(1.08) !important;
        }
        .slider-nav-btn:active {
          transform: translateY(-50%) scale(0.94) !important;
        }
      `}</style>

      {/* ← Prev Button */}
      <button
        className="slider-nav-btn"
        style={{ left: 0 }}
        aria-label="Previous slide"
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Track */}
      <div
        style={{ overflow: "hidden", padding: "12px 0" }}
        onMouseEnter={() => setTrackHovered(true)}
        onMouseLeave={handleTrackMouseLeave}
        onMouseDown={handleTrackMouseDown}
        onMouseMove={handleTrackMouseMove}
        onMouseUp={handleTrackMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            width: `${(filteredItems.length / visibleCards) * 100}%`,
            transform: `translateX(calc(-${currentIndex * (100 / filteredItems.length)}% + ${dragOffset}px))`,
            transition: isDragging ? "none" : "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {filteredItems.map((item, index) => (
            <div
              key={index}
              style={{
                width: `${100 / filteredItems.length}%`,
                flexShrink: 0,
                padding: "0 10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {renderCard(item, index)}
            </div>
          ))}
        </div>
      </div>

      {/* → Next Button */}
      <button
        className="slider-nav-btn"
        style={{ right: 0 }}
        aria-label="Next slide"
        onClick={(e) => { e.stopPropagation(); goNext(); }}
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators */}
      {maxIndex > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            marginTop: "20px",
          }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              style={{
                width: i === currentIndex ? "22px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === currentIndex ? "#19aefc" : "#cbd5e1",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
