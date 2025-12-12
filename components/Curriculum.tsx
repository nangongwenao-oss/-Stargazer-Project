import React, { useState } from 'react';
import { BookOpen, User, Lock, PlayCircle, CheckCircle } from 'lucide-react';
import { CourseModule } from '../types';

const courses: CourseModule[] = [
    { id: '1', title: '格物致知：量子物理入门', description: '探究微观世界的本质规律', mentor: 'Dr. Zhang (CAS)', status: 'completed', progress: 100 },
    { id: '2', title: '知行合一：AI 机器人实战', description: 'ROS2 导航算法实现', mentor: 'Prof. Li (DJI)', status: 'in-progress', progress: 65 },
    { id: '3', title: '兼爱非攻：科技伦理辩论', description: '基因编辑技术的道德边界', mentor: 'Master Wang', status: 'locked', progress: 0 },
];

export const Curriculum: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ming' | 'an' | 'hua'>('an');

  return (
    <div className="p-4 space-y-6 pb-24">
      <header>
        <h2 className="text-3xl font-oriental text-gold text-glow mb-2">匠心 · 育英</h2>
        <p className="text-gray-400 text-sm">定制化培养体系 (Customized Cultivation)</p>
      </header>

      {/* Phase Selector */}
      <div className="flex p-1 bg-black/40 rounded-xl backdrop-blur-sm">
        {(['ming', 'an', 'hua'] as const).map((stage) => (
            <button
                key={stage}
                onClick={() => setActiveTab(stage)}
                className={`flex-1 py-2 text-sm font-oriental rounded-lg transition-all duration-300 ${
                    activeTab === stage 
                    ? 'bg-gold text-ink font-bold shadow-lg shadow-gold/20' 
                    : 'text-gray-500 hover:text-gray-300'
                }`}
            >
                {stage === 'ming' && '明劲 (Ming)'}
                {stage === 'an' && '暗劲 (An)'}
                {stage === 'hua' && '化劲 (Hua)'}
            </button>
        ))}
      </div>

      {/* Current Phase Card */}
      <div className="glass-panel p-6 rounded-2xl border border-gold shadow-[0_0_15px_rgba(212,175,55,0.15)] relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10">
            <h3 className="text-2xl font-oriental text-white mb-1">
                {activeTab === 'ming' && '第一阶段：筑基'}
                {activeTab === 'an' && '第二阶段：通变'}
                {activeTab === 'hua' && '第三阶段：无极'}
            </h3>
            <p className="text-gold/80 text-sm mb-4 font-serif italic">
                {activeTab === 'ming' && '"规矩方圆，初窥门径。"'}
                {activeTab === 'an' && '"内气潜转，如水无形。"'}
                {activeTab === 'hua' && '"万法归一，道法自然。"'}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <span className="text-xs text-gray-400 block">核心目标</span>
                    <span className="text-jade font-bold text-sm">跨学科思维整合</span>
                </div>
                <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <span className="text-xs text-gray-400 block">导师团队</span>
                    <span className="text-gold font-bold text-sm">双导师制 (2+1)</span>
                </div>
            </div>
        </div>
      </div>

      {/* Course List */}
      <div className="space-y-4">
        <h3 className="text-gray-300 font-oriental text-lg flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-gold" />
            <span>本阶段项目 (Modules)</span>
        </h3>

        {courses.map((course) => (
            <div key={course.id} className="glass-panel p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h4 className="font-bold text-gray-100 group-hover:text-gold transition-colors">{course.title}</h4>
                        <p className="text-xs text-gray-400 mt-1">{course.description}</p>
                    </div>
                    {course.status === 'locked' ? <Lock className="w-4 h-4 text-gray-600" /> : 
                     course.status === 'completed' ? <CheckCircle className="w-4 h-4 text-jade" /> :
                     <PlayCircle className="w-4 h-4 text-gold" />}
                </div>
                
                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                        <User className="w-3 h-3 text-gray-500" />
                        <span className="text-xs text-gray-500">{course.mentor}</span>
                    </div>
                    {course.status !== 'locked' && (
                        <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                                className={`h-full rounded-full ${course.status === 'completed' ? 'bg-jade' : 'bg-gold'}`} 
                                style={{ width: `${course.progress}%` }}
                            ></div>
                        </div>
                    )}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};
