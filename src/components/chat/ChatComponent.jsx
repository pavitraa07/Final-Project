import React, { useState, useEffect, useRef } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

const ChatComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: "ai", text: "Hello 👋 I'm your assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Auto scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Simple response generator
  const generateAIResponse = (text) => {
    const msg = text.toLowerCase();
    if (msg.includes("hello") || msg.includes("hi")) return "Hi there 👋";
    if (msg.includes("help")) return "Sure! What do you need help with?";
    if (msg.includes("name")) return "I'm your AI Assistant 🤖";
    if (msg.includes("thank")) return "You're welcome 🙌";
    if (msg.includes("bye")) return "Goodbye 👋";
    return "Interesting... tell me more!";
  };

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = { id: Date.now(), sender: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const aiMsg = {
        id: Date.now() + 1,
        sender: "ai",
        text: generateAIResponse(trimmed),
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button className="chat-fab" onClick={() => setIsOpen((v) => !v)}>
        <div className="icon-wrapper">
          <AiOutlineStar className="chat-fab-icon" />
        </div>
        <span className="chat-fab-text">Chat with AI</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-left">
              <AiOutlineStar />
              <span className="chat-title">AI Assistant</span>
            </div>
            <button className="chat-close" onClick={() => setIsOpen(false)}>
              <IoClose />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`message-row ${m.sender === "user" ? "user" : "ai"}`}
              >
                <div className="bubble">{m.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="chat-text-input"
            />
            <button type="submit" className="chat-send-btn">
              <FiSend />
            </button>
          </form>
        </div>
      )}

      {/* Inline CSS */}
      <style>{`
        /* Floating Button */
        .chat-fab {
          position: fixed;
          right: 24px;
          bottom: 28px;
          background: #07b28f;
          color: #fff;
          padding: 14px 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 8px 20px rgba(3, 20, 14, 0.25);
          border: none;
          cursor: pointer;
          z-index: 9999;
          font-weight: 600;
          font-size: 16px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .chat-fab:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 34px rgba(3, 20, 14, 0.28);
        }

        .icon-wrapper {
          position: relative;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #07b28f;
        }

        .icon-wrapper::before {
          content: "";
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: conic-gradient(white 10deg, transparent 10deg 360deg);
          animation: border-rotate 1.8s linear infinite;
          z-index: 1;
        }

        .icon-wrapper::after {
          content: "";
          position: absolute;
          inset: 2px;
          border-radius: 50%;
          background: #07b28f;
          z-index: 2;
        }

        .chat-fab-icon {
          font-size: 20px;
          z-index: 3;
          position: relative;
        }

        @keyframes border-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Chat Window */
        .chat-window {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          width: 440px;
          max-width: calc(100% - 32px);
          height: 68vh;
          min-height: 440px;
          background: #fff;
          border-radius: 12px;
          box-shadow: -8px 16px 40px rgba(0,0,0,0.28);
          z-index: 10000;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: chat-slide-in 0.25s ease-out;
        }

        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          background: #0fa37f;
          color: white;
        }
        .chat-header-left {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
        }
        .chat-title {
          font-size: 1.05rem;
        }
        .chat-close {
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
          font-size: 22px;
          padding: 6px;
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          background: #f4f4f4;
        }

        .message-row { margin-bottom: 12px; display: flex; }
        .message-row.ai { justify-content: flex-start; }
        .message-row.user { justify-content: flex-end; }

        .bubble {
          padding: 10px 14px;
          border-radius: 16px;
          max-width: 78%;
          line-height: 1.3;
          word-break: break-word;
          box-shadow: 0 1px 0 rgba(0,0,0,0.05);
        }
        .message-row.ai .bubble {
          background: #ffffff;
          border-radius: 16px 16px 16px 4px;
        }
        .message-row.user .bubble {
          background: #dcf8c6;
          border-radius: 16px 16px 4px 16px;
        }

        .chat-input {
          display: flex;
          gap: 8px;
          padding: 12px;
          border-top: 1px solid #ededed;
          background: white;
        }
        .chat-text-input {
          flex: 1;
          padding: 10px 12px;
          border-radius: 999px;
          border: 1px solid #d0d0d0;
          outline: none;
          font-size: 0.95rem;
        }
        .chat-text-input:focus {
          box-shadow: 0 0 0 3px rgba(7,178,143,0.08);
          border-color: #b7e0d6;
        }
        .chat-send-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 12px;
          border-radius: 999px;
          background: #0fa37f;
          color: white;
          border: none;
          cursor: pointer;
          min-width: 44px;
        }

        @keyframes chat-slide-in {
          from { transform: translateX(100%) translateY(-50%); opacity: 0; }
          to { transform: translateX(0) translateY(-50%); opacity: 1; }
        }

        @media (max-width: 600px) {
          .chat-window {
            width: calc(100% - 24px);
            right: 12px;
            left: 12px;
            top: auto;
            bottom: 12px;
            transform: none;
            height: 68vh;
            min-height: 360px;
          }
        }
      `}</style>
    </>
  );
};

export default ChatComponent;
