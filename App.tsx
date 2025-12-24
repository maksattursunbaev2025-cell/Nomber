
import React, { useState } from 'react';
import Layout from './components/Layout';
import NumberCard from './components/NumberCard';
import CountingGame from './components/CountingGame';
import { AppState } from './types';
import { NUMBERS, APP_TITLE } from './constants';
import { speak } from './services/speechService';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>(AppState.HOME);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const handleNumberClick = (num: number) => {
    setSelectedNumber(num);
    setView(AppState.LEARN);
  };

  const goHome = () => {
    setView(AppState.HOME);
    setSelectedNumber(null);
  };

  const startLearning = () => {
    speak("Давай учить цифры вместе!");
    setView(AppState.LEARN);
  };

  const startGame = () => {
    speak("Давай поиграем в игру! Посчитай предметы.");
    setView(AppState.GAME);
  };

  const renderContent = () => {
    switch (view) {
      case AppState.HOME:
        return (
          <div className="flex flex-col items-center justify-center gap-8 h-full">
            <div className="text-center">
              <div className="text-9xl mb-4 bouncy">🎒</div>
              <h2 className="text-4xl font-black text-blue-800 mb-2">Привет, малыш!</h2>
              <p className="text-xl text-blue-600 font-bold">Готов учить цифры?</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-sm">
              <button 
                onClick={startLearning}
                className="bg-yellow-400 hover:bg-yellow-500 text-white p-6 rounded-3xl shadow-xl flex flex-col items-center gap-2 transform transition-all active:scale-95"
              >
                <span className="text-5xl">🔢</span>
                <span className="text-2xl font-black">УЧИМ</span>
              </button>
              <button 
                onClick={startGame}
                className="bg-green-400 hover:bg-green-500 text-white p-6 rounded-3xl shadow-xl flex flex-col items-center gap-2 transform transition-all active:scale-95"
              >
                <span className="text-5xl">🎮</span>
                <span className="text-2xl font-black">ИГРАЕМ</span>
              </button>
            </div>
          </div>
        );

      case AppState.LEARN:
        if (selectedNumber !== null) {
          const num = NUMBERS.find(n => n.value === selectedNumber)!;
          return (
            <div className="flex flex-col items-center gap-8">
              <div className={`${num.color} w-64 h-64 rounded-full flex items-center justify-center shadow-2xl animate-in fade-in zoom-in duration-500`}>
                <span className="text-[12rem] font-black text-white drop-shadow-xl">
                  {num.value}
                </span>
              </div>
              
              <div className="text-center">
                <h3 className="text-5xl font-black text-blue-800 mb-4">{num.name}</h3>
                <div className="flex flex-wrap justify-center gap-4 bg-white p-8 rounded-3xl shadow-lg">
                  {num.items.length > 0 ? num.items.map((item, i) => (
                    <span key={i} className="text-5xl animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                      {item}
                    </span>
                  )) : <span className="text-5xl italic text-gray-400">Тут ничего нет!</span>}
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedNumber(null)}
                  className="bg-blue-500 text-white px-8 py-4 rounded-2xl font-black text-xl shadow-lg active:scale-95 transition-all"
                >
                  К списку
                </button>
                <button 
                  onClick={() => speak(`${num.name}. Это цифра ${num.value}.`)}
                  className="bg-purple-500 text-white px-8 py-4 rounded-2xl font-black text-xl shadow-lg active:scale-95 transition-all flex items-center gap-2"
                >
                  🔊 Повторить
                </button>
              </div>
            </div>
          );
        }

        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {NUMBERS.map((num) => (
              <NumberCard key={num.value} data={num} onClick={handleNumberClick} />
            ))}
          </div>
        );

      case AppState.GAME:
        return <CountingGame />;

      default:
        return null;
    }
  };

  return (
    <Layout title={APP_TITLE} onBack={view !== AppState.HOME ? goHome : undefined}>
      {renderContent()}
    </Layout>
  );
};

export default App;
