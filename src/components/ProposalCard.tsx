
import React from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare, Clock } from 'lucide-react';

interface ProposalCardProps {
  title: string;
  description: string;
  category: 'Ethics' | 'Law' | 'Education' | 'Conflict';
  votes: {
    up: number;
    down: number;
  };
  comments: number;
  timeLeft: string;
}

const ProposalCard: React.FC<ProposalCardProps> = ({
  title,
  description,
  category,
  votes,
  comments,
  timeLeft,
}) => {
  // Get the appropriate color based on the category
  const getCategoryColor = () => {
    switch (category) {
      case 'Ethics':
        return 'bg-codex-light-brown border-codex-brown';
      case 'Law':
        return 'bg-codex-light-blue border-codex-blue';
      case 'Education':
        return 'bg-codex-light-gold border-codex-gold';
      case 'Conflict':
        return 'bg-codex-light-red border-codex-red';
      default:
        return 'bg-gray-100 border-gray-400';
    }
  };

  return (
    <div className={`codex-card border-l-4 ${getCategoryColor()} mb-4`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold font-serif">{title}</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-gray-100">{category}</span>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex space-x-4">
          <div className="flex items-center">
            <ThumbsUp size={16} className="mr-1" />
            <span>{votes.up}</span>
          </div>
          <div className="flex items-center">
            <ThumbsDown size={16} className="mr-1" />
            <span>{votes.down}</span>
          </div>
          <div className="flex items-center">
            <MessageSquare size={16} className="mr-1" />
            <span>{comments}</span>
          </div>
        </div>
        <div className="flex items-center">
          <Clock size={16} className="mr-1" />
          <span>{timeLeft}</span>
        </div>
      </div>
    </div>
  );
};

export default ProposalCard;
