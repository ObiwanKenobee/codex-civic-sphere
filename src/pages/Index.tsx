
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import CivicAIAssistant from '@/components/CivicAIAssistant';
import ProposalCard from '@/components/ProposalCard';
import LearningModule from '@/components/LearningModule';
import EthicsLogItem from '@/components/EthicsLogItem';

const Index = () => {
  // Sample data for proposals
  const proposals = [
    {
      title: 'Water Sharing Pact',
      description: 'A proposal to fairly distribute water resources between three neighboring regions facing drought conditions.',
      category: 'Law' as const,
      votes: { up: 245, down: 32 },
      comments: 78,
      timeLeft: '3 days left'
    },
    {
      title: 'Language AI Bill',
      description: 'Regulating the use of language models in civic discourse to prevent misinformation while preserving free speech.',
      category: 'Ethics' as const,
      votes: { up: 189, down: 56 },
      comments: 42,
      timeLeft: '5 days left'
    }
  ];

  // Sample data for learning modules
  const learningModules = [
    {
      title: 'Ethics of Scarcity',
      description: 'Learn how to make fair decisions when resources are limited.',
      progress: 65,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
    },
    {
      title: 'Voice of 3 Tribes',
      description: 'Case study on resolving conflicts between different cultural perspectives.',
      progress: 30,
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81'
    }
  ];

  // Sample data for ethics logs
  const ethicsLogs = [
    {
      title: 'Resource Allocation Alert',
      description: 'Potential equity issue detected in latest water distribution algorithm.',
      status: 'alert' as const,
      timestamp: '2h ago'
    },
    {
      title: 'Community Forum Rules Updated',
      description: 'New moderation guidelines implemented after community vote.',
      status: 'resolved' as const,
      timestamp: '1d ago'
    },
    {
      title: 'Bias Review In Progress',
      description: 'Routine analysis of decision-making patterns in governance AI.',
      status: 'pending' as const,
      timestamp: '12h ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section with Civic AI Assistant */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">Welcome to Codex Novum OS</h1>
          <CivicAIAssistant />
        </div>
        
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Active Proposals Column */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-serif font-semibold mb-4 flex items-center">
              <span className="inline-block w-1 h-6 bg-codex-blue mr-2"></span>
              Active Proposals
            </h2>
            <div className="space-y-4">
              {proposals.map((proposal, index) => (
                <ProposalCard key={index} {...proposal} />
              ))}
            </div>
          </div>
          
          {/* Codex School Column */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-serif font-semibold mb-4 flex items-center">
              <span className="inline-block w-1 h-6 bg-codex-gold mr-2"></span>
              Codex School
            </h2>
            <div className="space-y-4">
              {learningModules.map((module, index) => (
                <LearningModule key={index} {...module} />
              ))}
            </div>
          </div>
          
          {/* Ethics Log Column */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-serif font-semibold mb-4 flex items-center">
              <span className="inline-block w-1 h-6 bg-codex-brown mr-2"></span>
              Live Ethics Log
            </h2>
            <div className="codex-card space-y-4">
              {ethicsLogs.map((log, index) => (
                <EthicsLogItem key={index} {...log} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
