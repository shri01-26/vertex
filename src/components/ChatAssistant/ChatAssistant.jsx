import { useState, useEffect, useRef } from "react";
import { X, Headphones, MessageSquare, Send } from "lucide-react";
import "./ChatAssistant.css";

const chatSequence = [
  { from: "bot", text: "👋 Hi! Welcome to Vertex Suite." },
  { from: "bot", text: "How can we help you today?" },
  { from: "user", text: "I want to automate my WhatsApp." },
  { from: "bot", text: "Great choice! 🚀 We can set that up in minutes." },
  { from: "bot", text: "Want me to show you how?" },
  { from: "user", text: "Yes, please!" },
];

function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const seqRef = useRef(null);
  const msgBoxRef = useRef(null);

  // Play animated chat sequence when opened
  useEffect(() => {
    if (!open) {
      setVisibleMessages([]);
      clearTimeout(seqRef.current);
      return;
    }
    setVisibleMessages([]);
    let delay = 400;
    chatSequence.forEach((msg, i) => {
      seqRef.current = setTimeout(() => {
        if (msg.from === "bot") setTyping(true);
        setTimeout(() => {
          setTyping(false);
          setVisibleMessages((prev) => [...prev, msg]);
          if (msgBoxRef.current) {
            msgBoxRef.current.scrollTop = msgBoxRef.current.scrollHeight;
          }
        }, msg.from === "bot" ? 800 : 200);
      }, delay);
      delay += msg.from === "bot" ? 1600 : 900;
    });
    return () => clearTimeout(seqRef.current);
  }, [open]);

  return (
    <div className="chat-widget-root">
      {/* Expanded Chat Card */}
      <div className={`chat-card-panel ${open ? "visible" : ""}`}>
        {/* Header */}
        <div className="chat-panel-header">
          <div className="chat-panel-avatar">
            <div className="chat-avatar-inner">VS</div>
            <span className="chat-online-dot" />
          </div>
          <div className="chat-panel-info">
            <strong>Vertex Assistant</strong>
            <span>Online · Replies instantly</span>
          </div>
          <button className="chat-panel-close" onClick={() => setOpen(false)} aria-label="Close">
            <X size={16} />
          </button>
        </div>

        {/* Messages */}
        <div className="chat-messages-box" ref={msgBoxRef}>
          {visibleMessages.map((msg, i) => (
            <div key={i} className={`chat-bubble-row ${msg.from}`}>
              {msg.from === "bot" && (
                <div className="chat-bot-dot">VS</div>
              )}
              <div className={`chat-assistant-bubble ${msg.from}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="chat-bubble-row bot">
              <div className="chat-bot-dot">VS</div>
              <div className="chat-assistant-bubble bot chat-typing-indicator">
                <span /><span /><span />
              </div>
            </div>
          )}
        </div>

        {/* Footer input */}
        <div className="chat-panel-footer">
          <a href="/contact-sales" className="chat-get-started-btn">
            <MessageSquare size={16} /> Get Started
          </a>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className={`chat-toggle-btn ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle chat"
      >
        {open ? <X size={22} /> : <Headphones size={22} />}
        {!open && <span className="chat-btn-pulse" />}
      </button>
    </div>
  );
}

export default ChatAssistant;
