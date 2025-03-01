import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';

const FEATURED_PROJECTS = [
  {
    id: '1',
    title: 'Premium Smart Watch',
    description: 'A luxury smartwatch crafted from aerospace-grade materials, featuring advanced health monitoring and seamless connectivity.',
    imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800',
    currentAmount: 75000,
    goalAmount: 150000,
    daysLeft: 18,
  },
  {
    id: '2',
    title: 'Innovative Sound System',
    description: 'Experience crystal-clear audio with our revolutionary wireless speaker system, designed for audiophiles and music enthusiasts.',
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800',
    currentAmount: 95000,
    goalAmount: 120000,
    daysLeft: 25,
  },
  {
    id: '3',
    title: 'Luxury Coffee Maker',
    description: 'Precision-engineered coffee machine that brings barista-quality coffee to your home with smart temperature control.',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    currentAmount: 45000,
    goalAmount: 80000,
    daysLeft: 30,
  },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Header */}
        <header className="bg-white shadow-lg backdrop-blur-lg bg-white/90 sticky top-0 z-50">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="h-8 w-8 text-gray-700" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  SilverFund
                </h1>
              </div>
              <nav className="flex items-center gap-6">
                <a href="/explore" className="text-gray-600 hover:text-gray-900 font-medium">
                  Explore
                </a>
                <a href="/start" className="text-gray-600 hover:text-gray-900 font-medium">
                  Start a Project
                </a>
                <button className="rounded-full bg-gradient-to-r from-gray-700 to-gray-900 px-6 py-2.5 text-white hover:shadow-lg transition-all duration-300 font-medium">
                  Sign In
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
                <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Elevate Your Vision
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
                Join an exclusive community of innovators and backers. Transform groundbreaking 
                ideas into reality through the power of collective support and shared vision.
              </p>
              <div className="mx-auto mt-10 flex justify-center gap-4">
                <a
                  href="/start"
                  className="rounded-full bg-gradient-to-r from-gray-700 to-gray-900 px-8 py-4 text-white hover:shadow-lg transition-all duration-300 font-medium"
                >
                  Launch Your Project
                </a>
                <a
                  href="/explore"
                  className="rounded-full bg-white px-8 py-4 text-gray-900 hover:shadow-lg transition-all duration-300 font-medium border border-gray-200"
                >
                  Explore Projects
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover innovative projects that are shaping the future. Back them early and be part of their success story.
              </p>
            </div>
            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED_PROJECTS.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">$12M+</div>
                <div className="mt-2 text-gray-600">Total Funded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">15K+</div>
                <div className="mt-2 text-gray-600">Backers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">500+</div>
                <div className="mt-2 text-gray-600">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">98%</div>
                <div className="mt-2 text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;