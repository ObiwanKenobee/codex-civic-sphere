
import React from 'react';
import { AlertTriangle, Check, Clock } from 'lucide-react';

interface EthicsLogItemProps {
  title: string;
  description: string;
  status: 'resolved' | 'pending' | 'alert';
  timestamp: string;
}

const EthicsLogItem: React.FC<EthicsLogItemProps> = ({
  title,
  description,
  status,
  timestamp,
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'resolved':
        return <Check size={16} className="text-codex-green" />;
      case 'pending':
        return <Clock size={16} className="text-codex-gold" />;
      case 'alert':
        return <AlertTriangle size={16} className="text-codex-red" />;
      default:
        return null;
    }
  };

  const getStatusClass = () => {
    switch (status) {
      case 'resolved':
        return 'bg-codex-light-green border-codex-green';
      case 'pending':
        return 'bg-codex-light-gold border-codex-gold';
      case 'alert':
        return 'bg-codex-light-red border-codex-red';
      default:
        return 'bg-gray-100 border-gray-400';
    }
  };

  return (
    <div className={`p-3 rounded-md border-l-4 mb-2 ${getStatusClass()}`}>
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          {getStatusIcon()}
          <h4 className="text-base font-medium ml-2">{title}</h4>
        </div>
        <span className="text-xs text-gray-500">{timestamp}</span>
      </div>
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
    </div>
  );
};

export default EthicsLogItem;
