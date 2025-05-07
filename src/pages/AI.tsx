
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import CivicAIAssistant from '@/components/CivicAIAssistant';

const AI = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold mb-6">Codex GPT — Civic AI Dialog</h1>
        <p className="text-lg mb-6">
          A Socratic assistant for moral reasoning and civic understanding. Consult the AI on ethical
          dilemmas, legal questions, and civic challenges.
        </p>
        
        <div className="max-w-2xl mx-auto mt-8">
          <CivicAIAssistant />
          
          <div className="mt-8 codex-card">
            <h2 className="text-xl font-serif font-semibold mb-4">About Civic AI</h2>
            <p className="mb-4">
              The Codex GPT is designed to help citizens reason through complex moral and civic issues.
              Unlike standard AI assistants, it focuses specifically on:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Identifying ethical dimensions of problems</li>
              <li>Surfacing relevant legal and historical precedents</li>
              <li>Highlighting potential biases in reasoning</li>
              <li>Providing multiple perspectives on divisive issues</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
