"use client";
import { useState, useRef, useEffect } from "react";
import { X, Send, Loader2, Bot, Sparkles } from "lucide-react";

const HealthBotIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="20" cy="20" r="20" fill="url(#botGrad)" />
    <path d="M14 20h12M20 14v12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="20" cy="20" r="7" stroke="white" strokeWidth="2" strokeOpacity="0.6" />
    <circle cx="15" cy="17" r="1.5" fill="white" />
    <circle cx="25" cy="17" r="1.5" fill="white" />
    <defs>
      <linearGradient id="botGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3b82f6" />
        <stop offset="1" stopColor="#6366f1" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "👋 Hello! I'm **HealthBot**, your AI guide for the HealthChain platform.\n\nAre you here as a **Patient** or a **Doctor**? I'll walk you through everything — from connecting your wallet to booking appointments!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const formatMessage = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>');
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    try {
      const response = await fetch("/api/groq-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });
      const data = await response.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I'm having trouble connecting right now. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 group flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-2xl
            bg-gradient-to-br from-primary to-primary
            shadow-lg shadow-primary/40 hover:shadow-primary/60
            hover:scale-105 active:scale-95 transition-all duration-300 border border-white/10"
          aria-label="Open HealthBot"
        >
          <div className="w-8 h-8 shrink-0">
            <HealthBotIcon />
          </div>
          <div className="flex flex-col leading-tight text-left">
            <span className="text-white text-xs font-bold tracking-wide">HealthBot</span>
            <span className="text-blue-200 text-[10px]">AI Assistant</span>
          </div>
          <Sparkles className="w-3.5 h-3.5 text-blue-200 animate-pulse ml-1" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[560px] flex flex-col rounded-2xl overflow-hidden
          border border-white/10 shadow-2xl shadow-black/50"
          style={{ background: 'oklch(0.12 0.02 260)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{ background: 'linear-gradient(135deg, oklch(0.18 0.10 260), oklch(0.15 0.08 280))' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/20 shadow">
                <HealthBotIcon />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-none">HealthBot</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-blue-300 text-[11px]">AI-Powered Assistant</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
            style={{ background: 'oklch(0.13 0.025 262)' }}
          >
            {messages.map((msg, index) => (
              <div key={index} className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 mt-0.5 border border-white/10">
                    <HealthBotIcon />
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
                    ? "bg-gradient-to-br from-primary to-primary text-white rounded-br-sm shadow-md shadow-primary/40"
                    : "text-slate-200 rounded-bl-sm border border-white/10 shadow-sm"
                    }`}
                  style={msg.role === "assistant" ? { background: 'oklch(0.18 0.03 262)' } : {}}
                  dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
                />
                {msg.role === "user" && (
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 shrink-0 mt-0.5 flex items-center justify-center border border-white/10">
                    <span className="text-white text-xs font-bold">U</span>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 border border-white/10">
                  <HealthBotIcon />
                </div>
                <div className="px-4 py-3 rounded-2xl rounded-bl-sm border border-white/10 flex items-center gap-2"
                  style={{ background: 'oklch(0.18 0.03 262)' }}
                >
                  <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                  <span className="text-slate-400 text-sm">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick prompts */}
          {messages.length <= 2 && (
            <div className="px-4 pb-3 flex gap-2 flex-wrap shrink-0" style={{ background: 'oklch(0.13 0.025 262)' }}>
              {["I'm a Patient", "I'm a Doctor", "How to connect wallet?"].map((q) => (
                <button key={q}
                  onClick={() => { setInput(q); }}
                  className="text-xs px-3 py-1.5 rounded-full border border-blue-500/40 text-blue-300 hover:bg-blue-500/20 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Bar */}
          <div className="px-4 py-3 flex items-center gap-2 shrink-0 border-t border-white/10"
            style={{ background: 'oklch(0.15 0.03 262)' }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask HealthBot anything..."
              className="flex-1 px-4 py-2.5 rounded-xl text-sm text-white placeholder:text-muted-foreground border border-white/10 outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
              style={{ background: 'oklch(0.12 0.02 260)' }}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-primary to-primary flex items-center justify-center
                hover:from-primary hover:to-primary disabled:opacity-40 disabled:cursor-not-allowed
                shadow-md shadow-primary/40 transition-all active:scale-95"
            >
              <Send size={15} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
