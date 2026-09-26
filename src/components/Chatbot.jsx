import { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome-1',
      sender: 'ai',
      text: "Hello! 👋 I'm Olugbenga's AI Assistant. Ask me anything about his skills, projects, background, or how to work together!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [lastFailedMessage, setLastFailedMessage] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const quickQuestions = [
    "What services do you offer?",
    "Tell me about your experience",
    "What technologies do you use?",
    "How can I contact Olugbenga?"
  ];

  // Auto-scroll to bottom whenever messages or loading state changes
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, messages, isLoading]);

  // Send message to API endpoint
  const sendMessage = async (textToSend) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsgId = Date.now().toString();
    const newMsg = {
      id: userMsgId,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputMessage('');
    setIsLoading(true);
    setLastFailedMessage(null);

    try {
      const response = await fetch('https://portfolio-chatbot-seven-lilac.vercel.app/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: text })
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data = await response.json();
      
      if (!data || typeof data.reply !== 'string') {
        throw new Error('Invalid response structure received from chatbot API');
      }

      const aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error('Chatbot API error:', err);
      setLastFailedMessage(text);
      const errorMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        isError: true,
        text: "I'm having trouble connecting to the server right now. Please check your internet connection or try again in a moment.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: 'ai',
        text: "Chat cleared! How else can I assist you today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setLastFailedMessage(null);
  };

  // Basic markdown renderer for bot responses (handles bolding, line breaks, bullet lists)
  const renderFormattedText = (text) => {
    if (!text) return null;

    const lines = text.split('\n');
    return lines.map((line, lineIdx) => {
      // Bullet list item
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const content = line.trim().substring(2);
        return (
          <li key={lineIdx} className="ml-4 list-disc my-1">
            {formatInlineText(content)}
          </li>
        );
      }

      return (
        <p key={lineIdx} className={lineIdx > 0 ? "mt-2" : ""}>
          {formatInlineText(line)}
        </p>
      );
    });
  };

  const formatInlineText = (text) => {
    // Parse **bold** markdown
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx} className="font-semibold text-orange-400">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center">
        {!isOpen && hasUnread && (
          <div className="absolute right-14 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-orange-400/40 whitespace-nowrap animate-pulse flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
            Chat with AI Assistant
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close AI Chatbot" : "Open AI Chatbot"}
          className="relative group p-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full shadow-2xl shadow-orange-500/40 transform hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
        >
          {isOpen ? (
            /* Close X Icon */
            <svg className="w-6 h-6 transform rotate-0 transition-transform duration-300 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Chat Icon */
            <div className="relative">
              <svg className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-orange-600 rounded-full"></span>
            </div>
          )}
        </button>
      </div>

      {/* Floating Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[380px] md:w-[410px] h-[540px] max-h-[calc(100vh-7.5rem)] z-50 bg-[#121318]/95 backdrop-blur-2xl border border-orange-500/30 rounded-2xl shadow-2xl shadow-black/90 flex flex-col overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-dark-secondary via-dark-tertiary to-dark-secondary p-4 border-b border-orange-500/20 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-orange-600 p-0.5 shadow-md shadow-orange-500/30">
                  <div className="w-full h-full bg-dark-secondary rounded-full flex items-center justify-center">
                    <span className="text-lg">🤖</span>
                  </div>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-dark-secondary rounded-full"></span>
              </div>
              <div>
                <h3 className="font-bold text-white text-base flex items-center gap-2">
                  ARLTECH AI
                  <span className="text-[10px] bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                    Bot
                  </span>
                </h3>
                <p className="text-xs text-gray-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online • Ready to assist
                </p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-1">
              <button
                onClick={handleClearChat}
                title="Clear Conversation"
                className="p-2 text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close Window"
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-dark/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`flex items-start gap-2.5 max-w-[88%] ${
                    msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-xs flex-shrink-0 shadow-sm mt-0.5">
                      🤖
                    </div>
                  )}

                  <div
                    className={`p-3.5 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-tr-none shadow-lg shadow-orange-500/20 font-medium'
                        : msg.isError
                        ? 'bg-rose-950/60 border border-rose-500/40 text-rose-200 rounded-tl-none'
                        : 'bg-dark-tertiary/90 border border-white/10 text-gray-200 rounded-tl-none shadow-md'
                    }`}
                  >
                    {msg.sender === 'ai' ? renderFormattedText(msg.text) : msg.text}

                    {msg.isError && lastFailedMessage && (
                      <button
                        onClick={() => sendMessage(lastFailedMessage)}
                        className="mt-2 text-xs bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 px-3 py-1 rounded-md transition-colors flex items-center gap-1 font-semibold"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Retry sending
                      </button>
                    )}
                  </div>
                </div>

                <span className="text-[10px] text-gray-500 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Bouncing Dots Typing Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-xs flex-shrink-0 shadow-sm mt-0.5">
                  🤖
                </div>
                <div className="bg-dark-tertiary/90 border border-white/10 p-3.5 rounded-2xl rounded-tl-none flex items-center space-x-1.5 shadow-md">
                  <div className="w-2 h-2 rounded-full bg-orange-400 animate-dot-1"></div>
                  <div className="w-2 h-2 rounded-full bg-orange-400 animate-dot-2"></div>
                  <div className="w-2 h-2 rounded-full bg-orange-400 animate-dot-3"></div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Questions */}
          {messages.length <= 2 && !isLoading && (
            <div className="px-4 py-2 bg-dark-secondary/60 border-t border-white/5 flex flex-wrap gap-1.5">
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(q)}
                  className="text-xs bg-dark-tertiary hover:bg-orange-500/20 text-gray-300 hover:text-orange-400 border border-white/10 hover:border-orange-500/40 px-2.5 py-1 rounded-full transition-all duration-200 text-left truncate max-w-full"
                >
                  ⚡ {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Footer */}
          <div className="p-3 bg-dark-secondary border-t border-orange-500/20">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex items-center space-x-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Olugbenga's AI assistant..."
                disabled={isLoading}
                className="flex-1 bg-dark-tertiary/80 border border-white/10 focus:border-orange-500/50 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-400 outline-none transition-all duration-200 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="p-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-700 disabled:to-gray-800 text-white rounded-xl shadow-md disabled:cursor-not-allowed transition-all duration-200 flex-shrink-0"
              >
                <svg className="w-5 h-5 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
            <div className="mt-2 text-center">
              <span className="text-[10px] text-gray-500">
                Powered by ARLTECH AI • Response time ~1s
              </span>
            </div>
          </div>

        </div>
      )}
    </>
  );
}
