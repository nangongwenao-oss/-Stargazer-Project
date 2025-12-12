import React from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

export const Tracking: React.FC = () => {
  return (
    <div className="p-4 space-y-6 pb-24 h-full flex flex-col">
      <header>
        <h2 className="text-3xl font-oriental text-gold text-glow mb-2">星轨 · 进阶</h2>
        <p className="text-gray-400 text-sm">人才能力培养追踪 (Growth Trajectory)</p>
      </header>

      {/* Dynamic Star Orbit Visualization */}
      <div className="relative w-full aspect-square max-h-[400px] mx-auto flex items-center justify-center my-4">
        {/* Orbits */}
        <div className="absolute w-[90%] h-[90%] border border-white/5 rounded-full animate-spin-slow"></div>
        <div className="absolute w-[65%] h-[65%] border border-dashed border-gold/20 rounded-full animate-spin-reverse-slow"></div>
        <div className="absolute w-[40%] h-[40%] border border-white/10 rounded-full"></div>

        {/* Central Star (User) */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-gold to-yellow-700 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.6)] z-20">
            <span className="font-oriental font-bold text-ink text-lg">我</span>
            <div className="absolute inset-0 rounded-full bg-gold animate-pulse-slow opacity-50"></div>
        </div>

        {/* Orbiting Planets (Milestones) */}
        {/* Planet 1 - Innovation */}
        <div className="absolute w-[90%] h-[90%] animate-spin-slow">
            <div className="absolute top-1/2 -right-3 w-8 h-8 bg-jade rounded-full shadow-[0_0_15px_rgba(0,168,107,0.8)] flex items-center justify-center -translate-y-1/2">
                <Zap className="w-4 h-4 text-white" />
            </div>
        </div>
        
        {/* Planet 2 - Academic */}
        <div className="absolute w-[65%] h-[65%] animate-spin-reverse-slow">
            <div className="absolute -top-3 left-1/2 w-6 h-6 bg-blue-500 rounded-full shadow-lg -translate-x-1/2 flex items-center justify-center">
                 <TrendingUp className="w-3 h-3 text-white" />
            </div>
        </div>
      </div>

      {/* KPI Dashboard */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass-panel p-4 rounded-xl border-t border-gold/30">
            <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-gold" />
                <span className="text-xs text-gray-300">学术成长 (GPA)</span>
            </div>
            <div className="text-2xl font-bold text-white">3.95 <span className="text-xs text-jade font-normal">↑ 5%</span></div>
        </div>
        
        <div className="glass-panel p-4 rounded-xl border-t border-jade/30">
             <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-jade" />
                <span className="text-xs text-gray-300">创新产出</span>
            </div>
            <div className="text-2xl font-bold text-white">3 <span className="text-xs text-gray-400 font-normal">项专利</span></div>
        </div>

        <div className="glass-panel p-4 rounded-xl border-t border-blue-500/30">
             <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-xs text-gray-300">领导力</span>
            </div>
            <div className="text-2xl font-bold text-white">12 <span className="text-xs text-gray-400 font-normal">次路演</span></div>
        </div>

        <div className="glass-panel p-4 rounded-xl border-t border-purple-500/30">
             <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-purple-400" />
                <span className="text-xs text-gray-300">校友预测</span>
            </div>
            <div className="text-sm font-bold text-white mt-2">常青藤 (Ivy League)</div>
        </div>
      </div>

      <div className="glass-panel p-4 rounded-xl">
        <h4 className="font-oriental text-gold mb-3">长期轨迹预测</h4>
        <div className="h-20 flex items-end justify-between gap-1">
             {[30, 45, 40, 60, 75, 70, 85, 95].map((h, i) => (
                 <div key={i} className="w-full bg-gold/20 rounded-t-sm hover:bg-gold/50 transition-colors" style={{ height: `${h}%` }}></div>
             ))}
        </div>
      </div>
    </div>
  );
};
