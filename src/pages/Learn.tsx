
import React from 'react';
import Navigation from '@/components/layout/Navigation';

const Learn = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold mb-6">Codex School</h1>
        <p className="text-lg mb-6">Learn civic virtues and ethical reasoning through structured modules and interactive lessons.</p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
          <p className="text-yellow-700">Coming soon: Interactive learning modules and civic education content.</p>
        </div>
      </div>
    </div>
  );
};

export default Learn;
