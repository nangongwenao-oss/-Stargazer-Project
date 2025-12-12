import React from 'react';
import { AppView } from '../types';
import { Eye, Book, Orbit, MessageSquareText } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: AppView;
  onChangeView: (view: AppView) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onChangeView }) => {
  return (
    <div className="relative h-screen flex flex-col max-w-md mx-auto shadow-2xl overflow-hidden bg-transparent">
      {/* Content Area */}
      <main className="flex-1 overflow-y-auto relative z-10">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 w-full h-20 bg-ink/90 backdrop-blur-xl border-t border-white/10 flex justify-around items-center z-30 pb-2">
        <NavButton 
            active={currentView === AppView.ASSESSMENT} 
            onClick={() => onChangeView(AppView.ASSESSMENT)}
            icon={<Eye className="w-6 h-6" />}
            label="慧眼·识珠"
        />
        <NavButton 
            active={currentView === AppView.CURRICULUM} 
            onClick={() => onChangeView(AppView.CURRICULUM)}
            icon={<Book className="w-6 h-6" />}
            label="匠心·育英"
        />
        <NavButton 
            active={currentView === AppView.TRACKING} 
            onClick={() => onChangeView(AppView.TRACKING)}
            icon={<Orbit className="w-6 h-6" />}
            label="星轨·进阶"
        />
        <NavButton 
            active={currentView === AppView.MENTOR} 
            onClick={() => onChangeView(AppView.MENTOR)}
            icon={<MessageSquareText className="w-6 h-6" />}
            label="导师中心"
        />
      </nav>
    </div>
  );
};

const NavButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ active, onClick, icon, label }) => (
    <button 
        onClick={onClick}
        className={`flex flex-col items-center justify-center space-y-1 transition-all duration-300 ${active ? 'text-gold scale-105' : 'text-gray-500 hover:text-gray-300'}`}
    >
        <div className={`p-1.5 rounded-full transition-all ${active ? 'bg-gold/10 shadow-[0_0_10px_rgba(212,175,55,0.3)]' : ''}`}>
            {icon}
        </div>
        <span className="text-[10px] font-medium font-oriental">{label}</span>
    </button>
);
