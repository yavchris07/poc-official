'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  Award, 
  Users, 
  TrendingUp,
  BookOpen,
  Clock,
  CheckCircle,
  Play,
  Star,
  Target,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardLayout from './layout';
import { MapPin } from '@/components/ui/map-pin';
// import { Button } from '@/components/ui/Button';

// Données simulées - À remplacer par votre API
const userData = {
  name: "Jean Kabasele",
  location: "Goma",
  progress: 65,
  certifications: 2,
  completedCourses: 3,
  totalCourses: 5,
  skills: ["Blockchain", "Cardano", "NFT", "Web3"],
};

const courses = [
  {
    id: 1,
    title: "Introduction à Cardano",
    description: "Découvrez les bases de la blockchain Cardano",
    progress: 100,
    duration: "45 min",
    lessons: 5,
    completed: true,
    image: "🎓"
  },
  {
    id: 2,
    title: "Les NFTs sur Cardano",
    description: "Comprenez et créez vos premiers NFTs",
    progress: 65,
    duration: "60 min",
    lessons: 6,
    completed: false,
    image: "🖼️"
  },
  {
    id: 3,
    title: "Project Catalyst",
    description: "Participez à la gouvernance de Cardano",
    progress: 0,
    duration: "30 min",
    lessons: 4,
    completed: false,
    image: "🗳️"
  }
];

const certifications = [
  {
    id: 1,
    title: "Cardano Fundamentals",
    date: "15 Jan 2024",
    score: 85,
    nftId: "asset1qxk...f8g9",
    verified: true
  },
  {
    id: 2,
    title: "NFT Basics",
    date: "20 Jan 2024",
    score: 92,
    nftId: "asset1rxl...h7f2",
    verified: true
  }
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(userData);

  return (
    // <DashboardLayout>
    <div className="space-y-2">
      {/* Welcome Section */}
      <div className="bg-linear-to-r from-cardano-blue to-cardano-light rounded-2xl p-8 text-white">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div>
            <h1 className="text-3xl text-gray-400 font-bold mb-2">
              Bon retour, {localStorage.getItem('man1')} {localStorage.getItem('man2')}! 👋
            </h1>
            <p className="text-blue-300 text-lg">
              Continuez votre parcours vers la certification blockchain
            </p>
            <div className="flex items-center mt-4 space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4 bg-amber-950" />
                <span className='text-gray-400'>{user.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4 bg-amber-950" />
                <span className='text-gray-400'>{user.certifications} certifications</span>
              </div>
            </div>
          </div>
          <div className="mt-4 lg:mt-0 bg-gray-300 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl text-gray-500 font-bold">{user.progress}%</div>
              <div className="text-blue-300 text-sm">Progression globale</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Cours terminés</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {user.completedCourses}/{user.totalCourses}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Certifications</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {user.certifications}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Compétences</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {user.skills.length}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Progression</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {user.progress}%
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cours en Progrès */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Mes cours en cours</h2>
            <Link href="/dashboard/training">
              <Button variant="ghost" className="text-cardano-blue">
                Voir tout
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {courses.filter(course => !course.completed).map((course) => (
              <div key={course.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-cardano-blue/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-cardano-blue to-cardano-light rounded-lg flex items-center justify-center text-white text-xl">
                  {course.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.description}</p>
                  <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-3 h-3" />
                      <span>{course.lessons} leçons</span>
                    </div>
                  </div>
                </div>
                <Link href={`/dashboard/training/${course.id}`}>
                  <Button size="sm">
                    {course.progress > 0 ? 'Continuer' : 'Commencer'}
                  </Button>
                </Link>
              </div>
            ))}

            {courses.filter(course => !course.completed).length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Tous les cours sont terminés !</p>
                <p className="text-sm">De nouveaux cours arrivent bientôt.</p>
              </div>
            )}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Mes certifications</h2>
            <Link href="/dashboard/certifications">
              <Button variant="ghost" className="text-cardano-blue">
                Voir tout
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="p-4 border border-gray-200 rounded-lg hover:border-green-500/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{cert.title}</h3>
                  {cert.verified && (
                    <div className="flex items-center space-x-1 text-green-600 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Vérifié</span>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <div>
                    <div>Score: <strong>{cert.score}%</strong></div>
                    <div>Obtenu le: {cert.date}</div>
                  </div>
                  <div className="text-xs bg-gray-100 px-2 py-1 rounded">
                    NFT: {cert.nftId}
                  </div>
                </div>
              </div>
            ))}

            {certifications.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <Award className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>Aucune certification pour le moment</p>
                <p className="text-sm">Completez un cours pour obtenir votre première certification NFT.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Prochain Objectif */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-3 mb-4">
          <Target className="w-6 h-6 text-cardano-blue" />
          <h2 className="text-xl font-bold text-gray-900">Prochain objectif</h2>
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 border border-orange-200">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">
                Terminer &quot;Les NFTs sur Cardano&quot;
              </h3>
              <p className="text-gray-600 mb-4">
                Completez ce cours pour débloquer votre prochaine certification NFT et 
                apparaître dans la base de talents.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-linear-to-r from-cardano-blue to-cardano-light h-2 rounded-full transition-all duration-300"
                  style={{ width: `${courses.find(c => c.id === 2)?.progress || 0}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-500 mt-2">
                {courses.find(c => c.id === 2)?.progress || 0}% complété
              </div>
            </div>
            <Link href="/dashboard/training/2" className="mt-4 lg:mt-0">
              <Button className="bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                <Play className="w-4 h-4 mr-2" />
                Continuer le cours
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Compétences */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Mes compétences</h2>
        <div className="flex flex-wrap gap-3">
          {user.skills.map((skill, index) => (
            <div 
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-cardano-blue to-cardano-light text-white rounded-full text-sm font-medium"
            >
              {skill}
            </div>
          ))}
          <div className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium border border-gray-300">
            + Ajouter
          </div>
        </div>
      </div>
    </div>
    // </DashboardLayout>

  );
}
