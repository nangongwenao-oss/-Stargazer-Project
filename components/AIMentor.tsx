import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Sparkles, ScrollText } from 'lucide-react';
import { generateMentorResponse } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';
import { ChatMessage } from '../types';

export const AIMentor: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: '善哉。吾乃**项目起源导师**。阁下正处于**暗劲**阶段，看似平静，实则内力潜转。今日有何困惑，关于“格物”抑或“致知”？',
      timestamp: Date.now(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Filter history for context (exclude thinking states if any)
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    
    // Call Gemini
    const responseText = await generateMentorResponse(userMsg.text, 'An Jin (Hidden Energy)', history);

    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, aiMsg]);
    setLoading(false);
  };

  const handlePredefinedQuestion = (q: string) => {
    setInput(q);
  };

  return (
    <div className="flex flex-col h-full relative">
      <header className="p-4 bg-ink/90 backdrop-blur-md border-b border-white/10 sticky top-0 z-20">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gold to-yellow-800 flex items-center justify-center shadow-lg border border-gold">
                <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
                <h2 className="text-lg font-oriental text-white">项目起源导师</h2>
                <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-gray-400">在线 (AI Powered)</span>
                </div>
            </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-32">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-4 shadow-lg ${
                msg.role === 'user'
                  ? 'bg-jade/20 border border-jade/30 text-white rounded-tr-none'
                  : 'bg-ink-light border border-gold/20 text-gray-200 rounded-tl-none'
              }`}
            >
              <div className="prose prose-invert prose-sm">
                <ReactMarkdown
                    components={{
                        strong: ({node, ...props}) => <span className="text-gold font-bold font-oriental" {...props} />
                    }}
                >
                    {msg.text}
                </ReactMarkdown>
              </div>
              <span className="text-[10px] text-gray-500 mt-2 block opacity-70">
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-ink-light border border-gold/10 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold animate-spin-slow" />
                <span className="text-xs text-gray-400">演算天机中...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="absolute bottom-[80px] left-0 right-0 p-4 bg-gradient-to-t from-ink via-ink to-transparent">
        {/* Quick Prompts */}
        <div className="flex gap-2 mb-3 overflow-x-auto pb-2 scrollbar-hide">
            <button onClick={() => handlePredefinedQuestion('我在暗劲阶段遇到瓶颈，如何突破？')} className="whitespace-nowrap px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:border-gold/50 transition-colors flex items-center gap-1">
                <ScrollText className="w-3 h-3" />
                暗劲阶段突破
            </button>
            <button onClick={() => handlePredefinedQuestion('请用格物致知的观点分析我的代码。')} className="whitespace-nowrap px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:border-gold/50 transition-colors">
                格物代码分析
            </button>
        </div>

        <div className="relative">
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="请教导师..."
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-4 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            disabled={loading}
            />
            <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gold text-ink rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors disabled:opacity-50"
            >
            <Send className="w-4 h-4" />
            </button>
        </div>
      </div>
    </div>
  );
};
