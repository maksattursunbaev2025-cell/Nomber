
import React from 'react';
import { NumberData } from '../types';
import { speak } from '../services/speechService';

interface NumberCardProps {
  data: NumberData;
  onClick: (num: number) => void;
}

const NumberCard: React.FC<NumberCardProps> = ({ data, onClick }) => {
  const handleInteraction = () => {
    speak(`${data.name}! ${data.value}`);
    onClick(data.value);
  };

  return (
    <button
      onClick={handleInteraction}
      className={`${data.color} rounded-3xl p-6 shadow-lg transform transition-all active:scale-90 hover:scale-105 flex flex-col items-center justify-center aspect-square`}
    >
      <span className="text-6xl md:text-8xl font-black text-white mb-2 drop-shadow-md">
        {data.value}
      </span>
      <span className="text-xl md:text-2xl font-bold text-white/90">
        {data.name}
      </span>
    </button>
  );
};

export default NumberCard;
