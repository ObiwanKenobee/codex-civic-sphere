
import React from 'react';
import Navigation from '@/components/layout/Navigation';

const Vote = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold mb-6">Codex Vote</h1>
        <p className="text-lg mb-6">Participate in real governance by voting on proposals and laws.</p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
          <p className="text-yellow-700">Coming soon: Voting interface for active proposals and ballot simulations.</p>
        </div>
      </div>
    </div>
  );
};

export default Vote;
