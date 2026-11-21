export type SkillLevel = 'Beginner' | 'Intermediate';
export type SkillCategory = 'Programming Languages' | 'Web Development' | 'Core Computer Science';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  percentage: number; // Visual representation of learning progress
  icon: string;
  category: SkillCategory;
  notes?: string;
}

export interface ExploringItem {
  title: string;
  category: string;
  description: string;
  icon: string;
  status: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  academicYear: string;
  location: string;
  description: string;
  highlights: string[];
  isCurrent: boolean;
  isPlaceholder?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  isDemo: boolean;
  statusBadge: string;
  githubUrl?: string;
  liveUrl?: string;
  placeholderNotice: string;
  keyFeatures: string[];
  colorGradient: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuedOn: string;
  gradeOrScore?: string;
  credentialId?: string;
  rollNumber?: string;
  verificationUrl?: string;
  image: string;
  isDemo: boolean;
  statusBadge: string;
  description: string;
  highlights: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  category: string;
  date: string;
  isDemo: boolean;
  statusBadge: string;
  description: string;
  keyTakeaways: string[];
  icon: string;
}

export interface LearningGoalItem {
  id: string;
  title: string;
  category: string;
  description: string;
  status: 'Actively Exploring' | 'Upcoming Roadmap' | 'Continuous Focus';
  targetMilestones: string[];
  icon: string;
}

export interface PersonalInfo {
  fullName: string;
  shortName: string;
  initials: string;
  title: string;
  roleBadge: string;
  location: string;
  email: string;
  college: string;
  degree: string;
  currentYear: string;
  expectedGraduation: string;
  previousEducation: string;
  linkedin: string;
  github: string;
  heroIntro: string;
  heroTagline: string;
  heroDescription: string;
  learningQuote: string;
  statusText: string;
}
