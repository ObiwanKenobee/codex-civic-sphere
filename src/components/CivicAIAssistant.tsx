
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";

const CivicAIAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    setIsThinking(true);
    
    // Simulate AI response
    setTimeout(() => {
      setIsThinking(false);
      setPrompt('');
    }, 2000);
  };

  return (
    <div className="codex-card bg-codex-light-blue border-l-4 border-codex-blue">
      <div className="flex items-center mb-4">
        <MessageSquare className="text-codex-blue mr-2" size={24} />
        <h2 className="text-xl font-serif font-semibold">Ask Codex GPT</h2>
      </div>
      
      <form onSubmit={handlePromptSubmit} className="flex gap-2">
        <Input
          type="text"
          placeholder="How do we resolve water disputes...?"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="codex-input flex-grow"
        />
        <Button 
          type="submit" 
          disabled={isThinking}
          className="bg-codex-blue hover:bg-blue-800 text-white"
        >
          {isThinking ? "Thinking..." : "Ask"}
        </Button>
      </form>
    </div>
  );
};

export default CivicAIAssistant;
