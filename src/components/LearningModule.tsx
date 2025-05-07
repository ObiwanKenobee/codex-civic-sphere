
import React from 'react';
import { Book } from 'lucide-react';

interface LearningModuleProps {
  title: string;
  description: string;
  progress: number;
  image: string;
}

const LearningModule: React.FC<LearningModuleProps> = ({
  title,
  description,
  progress,
  image,
}) => {
  return (
    <div className="codex-card border-l-4 border-codex-gold bg-codex-light-gold mb-4">
      <div className="flex items-center mb-2">
        <Book className="text-codex-gold mr-2" size={20} />
        <h3 className="text-lg font-semibold font-serif">{title}</h3>
      </div>
      
      <div className="mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-32 object-cover rounded-md mb-2" 
        />
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </div>
      
      <div className="mt-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-codex-gold h-2 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-xs text-right mt-1 text-gray-500">
          {progress}% complete
        </div>
      </div>
    </div>
  );
};

export default LearningModule;
