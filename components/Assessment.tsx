import React, { useState } from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { FileText, Activity, Brain, Award } from 'lucide-react';

const data = [
  { subject: '认知 (Cognition)', A: 120, fullMark: 150 },
  { subject: '创造 (Creativity)', A: 98, fullMark: 150 },
  { subject: '领导力 (Leadership)', A: 86, fullMark: 150 },
  { subject: '动机 (Drive)', A: 99, fullMark: 150 },
  { subject: '坚毅 (Grit)', A: 85, fullMark: 150 },
  { subject: '道德 (Ethics)', A: 130, fullMark: 150 },
];

export const Assessment: React.FC = () => {
  const [reportGenerated, setReportGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerateReport = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setReportGenerated(true);
    }, 2000);
  };

  return (
    <div className="p-4 space-y-6 pb-24 animate-float">
      <header className="mb-6">
        <h2 className="text-3xl font-oriental text-gold text-glow mb-2">慧眼 · 识珠</h2>
        <p className="text-gray-400 text-sm">人才多维纵向评估系统 (Longitudinal Assessment)</p>
      </header>

      {/* Radar Chart Card */}
      <div className="glass-panel rounded-2xl p-4 border-t border-gold/20">
        <h3 className="text-lg font-oriental text-gray-200 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-jade" />
            <span>五育雷达图 (The Pentagon of Talent)</span>
        </h3>
        <div className="h-[300px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid stroke="#444" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar
                name="当前能力 (Current)"
                dataKey="A"
                stroke="#D4AF37"
                strokeWidth={2}
                fill="#D4AF37"
                fillOpacity={0.4}
                />
                <Legend wrapperStyle={{ color: '#fff' }} />
            </RadarChart>
            </ResponsiveContainer>
        </div>
      </div>

      {/* Assessment List */}
      <div className="space-y-3">
        <h3 className="text-gold font-oriental text-lg">近期测评 (Recent Assessments)</h3>
        
        <div className="glass-panel p-4 rounded-xl flex justify-between items-center border-l-4 border-jade">
            <div>
                <h4 className="font-bold text-gray-200">认知能力测试 (NNAT)</h4>
                <p className="text-xs text-gray-400">完成于 2023.10.15</p>
            </div>
            <span className="text-2xl font-bold text-jade">98%</span>
        </div>

        <div className="glass-panel p-4 rounded-xl flex justify-between items-center border-l-4 border-gold">
            <div>
                <h4 className="font-bold text-gray-200">创造力评审 (CAT)</h4>
                <p className="text-xs text-gray-400">作品集待更新</p>
            </div>
            <button className="px-3 py-1 bg-ink border border-gold text-gold text-xs rounded hover:bg-gold hover:text-ink transition-colors">
                上传作品
            </button>
        </div>
      </div>

      {/* Potential Report Generator */}
      <div className="glass-panel p-6 rounded-2xl text-center space-y-4">
        <Brain className="w-12 h-12 text-gold mx-auto" />
        <h3 className="text-xl font-oriental text-white">根器辨识报告</h3>
        <p className="text-gray-400 text-sm">基于历史数据与 AI 行为分析生成早期潜力预测。</p>
        
        {!reportGenerated ? (
            <button 
                onClick={handleGenerateReport}
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-gold to-yellow-600 text-ink font-bold rounded-lg shadow-lg hover:shadow-gold/20 transition-all flex justify-center items-center gap-2"
            >
                {loading ? (
                    <>
                        <span className="animate-spin h-4 w-4 border-2 border-ink border-t-transparent rounded-full"></span>
                        <span>演算中...</span>
                    </>
                ) : (
                    <>
                        <FileText className="w-4 h-4" />
                        <span>生成报告 (Generate)</span>
                    </>
                )}
            </button>
        ) : (
            <div className="bg-jade/10 border border-jade/30 p-4 rounded-lg animate-fade-in text-left">
                <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-gold" />
                    <span className="text-jade font-bold">潜力等级：甲上 (S-Tier)</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                    学员在非线性思维与跨学科整合方面表现出卓越的“根器”。建议在 **暗劲** 阶段重点加强复杂系统的建模能力，并引入哲学思辨课程。
                </p>
            </div>
        )}
      </div>
    </div>
  );
};
