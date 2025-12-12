export enum AppView {
  LOGIN = 'LOGIN',
  ASSESSMENT = 'ASSESSMENT',
  CURRICULUM = 'CURRICULUM',
  TRACKING = 'TRACKING',
  MENTOR = 'MENTOR',
}

export interface User {
  id: string;
  username: string;
  role: 'student' | 'mentor' | 'admin';
  name: string;
  avatar: string;
  currentStage: 'Ming Jin' | 'An Jin' | 'Hua Jin';
}

export interface KPI {
  label: string;
  value: number;
  max: number;
  unit?: string;
  trend: 'up' | 'down' | 'stable';
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  mentor: string;
  status: 'locked' | 'in-progress' | 'completed';
  progress: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  isThinking?: boolean;
}
