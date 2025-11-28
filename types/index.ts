export interface User {
  id: string;
  email: string;
  name: string;
  location: 'Goma' | 'Nyiragongo' | 'Autre';
  isVerified: boolean;
  skills: string[];
  certifications: Certification[];
  progress: number;
  completedCourses: number;
  totalCourses: number;
}

export interface Certification {
  id: string;
  title: string;
  date: string;
  score: number;
  nftId: string;
  verified: boolean;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  progress: number;
  duration: string;
  lessons: number;
  completed: boolean;
  image: string;
}