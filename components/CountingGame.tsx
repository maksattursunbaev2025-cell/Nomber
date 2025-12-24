
import React, { useState, useEffect, useCallback } from 'react';
import { NUMBERS } from '../constants';
import { speak } from '../services/speechService';

const CountingGame: React.FC = () => {
  const [targetNumber, setTargetNumber] = useState(1);
  const [options, setOptions] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);

  const generateNewQuestion = useCallback(() => {
    const newTarget = Math.floor(Math.random() * 9) + 1;
    setTargetNumber(newTarget);
    
    // Create random options including the correct one
    const opts = [newTarget];
    while (opts.length < 3) {
      const r = Math.floor(Math.random() * 10);
      if (!opts.includes(r)) opts.push(r);
    }
    setOptions(opts.sort(() => Math.random() - 0.5));
    setFeedback(null);
    
    speak(`Сколько предметов ты видишь на экране? Посчитай их!`);
  }, []);

  useEffect(() => {
    generateNewQuestion();
  }, [generateNewQuestion]);

  const handleGuess = (num: number) => {
    if (num === targetNumber) {
      setFeedback("Правильно! Умница! 🎉");
      speak("Правильно! Умница!");
      setTimeout(() => generateNewQuestion(), 2000);
    } else {
      setFeedback("Ой, попробуй еще раз! 🧐");
      speak("Ой, попробуй еще раз!");
    }
  };

  const numberInfo = NUMBERS.find(n => n.value === targetNumber);

  return (
    <div className="flex flex-col items-center gap-8 py-4">
      <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-md flex flex-wrap justify-center gap-4 min-h-[200px] items-center">
        {numberInfo?.items.map((emoji, idx) => (
          <span key={idx} className="text-5xl animate-bounce" style={{ animationDelay: `${idx * 0.1}s` }}>
            {emoji}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleGuess(opt)}
            className="w-20 h-20 bg-blue-500 hover:bg-blue-600 text-white text-3xl font-black rounded-2xl shadow-lg transform active:scale-90 transition-all"
          >
            {opt}
          </button>
        ))}
      </div>

      {feedback && (
        <div className="text-3xl font-bold text-center text-blue-700 animate-pulse">
          {feedback}
        </div>
      )}
      
      <button 
        onClick={generateNewQuestion}
        className="mt-4 px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-bold"
      >
        Другое задание
      </button>
    </div>
  );
};

export default CountingGame;
