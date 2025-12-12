import React, { useState } from 'react';
import { Lock, Fingerprint, Hexagon } from 'lucide-react';

interface LoginProps {
  onLoginSuccess: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('luoyuan881105');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate Server Delay (1.5s)
    setTimeout(() => {
      if (username === 'luoyuan881105' && password === '123456') {
        onLoginSuccess();
      } else {
        setError('认证失败：凭证无效或会话过期');
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-ink-light/50 to-transparent pointer-events-none"></div>
      
      {/* Logo Area */}
      <div className="mb-12 text-center relative z-10">
        <div className="w-24 h-24 mx-auto mb-4 relative flex items-center justify-center">
            <Hexagon className="w-full h-full text-gold stroke-1 animate-spin-slow" />
            <div className="absolute w-16 h-16 bg-gradient-to-br from-gold to-yellow-800 rounded-full opacity-20 blur-xl animate-pulse-slow"></div>
            <Fingerprint className="w-10 h-10 text-jade absolute" />
        </div>
        <h1 className="text-4xl font-oriental text-white font-bold tracking-widest text-glow">星探计划</h1>
        <p className="text-gold/80 text-sm tracking-[0.2em] mt-2 uppercase">Stargazer Project</p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="w-full max-w-xs space-y-6 z-10 glass-panel p-8 rounded-2xl border-t border-gold/20">
        <div className="space-y-4">
            <div className="relative group">
                <input 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-ink/50 border-b border-gray-600 focus:border-gold outline-none py-2 px-8 text-white transition-colors placeholder-gray-600"
                    placeholder="User ID"
                />
                <div className="absolute left-0 top-2.5 text-gray-500 group-focus-within:text-gold transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
            </div>

            <div className="relative group">
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-ink/50 border-b border-gray-600 focus:border-gold outline-none py-2 px-8 text-white transition-colors placeholder-gray-600"
                    placeholder="Passcode"
                />
                <div className="absolute left-0 top-2.5 text-gray-500 group-focus-within:text-gold transition-colors">
                    <Lock className="w-4 h-4" />
                </div>
            </div>
        </div>

        {error && <div className="text-red-400 text-xs text-center bg-red-900/20 py-1 rounded border border-red-500/20">{error}</div>}

        <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-gradient-to-r from-gold to-yellow-700 text-ink font-bold py-3 rounded-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex justify-center items-center gap-2"
        >
            {loading ? (
                <>
                    <span className="w-4 h-4 border-2 border-ink border-t-transparent rounded-full animate-spin"></span>
                    <span>安全握手...</span>
                </>
            ) : (
                '进入系统 (Access)'
            )}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-xs text-gray-600">Dou Zhuan Xing Yi © 2024</p>
      </div>
    </div>
  );
};
