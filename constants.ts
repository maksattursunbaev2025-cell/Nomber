
import { NumberData } from './types';

export const NUMBERS: NumberData[] = [
  { value: 0, name: 'Ноль', color: 'bg-gray-400', emoji: '🍩', items: [] },
  { value: 1, name: 'Один', color: 'bg-red-400', emoji: '🍎', items: ['🍎'] },
  { value: 2, name: 'Два', color: 'bg-orange-400', emoji: '🦆', items: ['🦆', '🦆'] },
  { value: 3, name: 'Три', color: 'bg-yellow-400', emoji: '🐝', items: ['🐝', '🐝', '🐝'] },
  { value: 4, name: 'Четыре', color: 'bg-green-400', emoji: '🍀', items: ['🍀', '🍀', '🍀', '🍀'] },
  { value: 5, name: 'Пять', color: 'bg-blue-400', emoji: '🖐️', items: ['🖐️', '🖐️', '🖐️', '🖐️', '🖐️'] },
  { value: 6, name: 'Шесть', color: 'bg-indigo-400', emoji: '🎲', items: ['🎲', '🎲', '🎲', '🎲', '🎲', '🎲'] },
  { value: 7, name: 'Семь', color: 'bg-purple-400', emoji: '🌈', items: ['🌈', '🌈', '🌈', '🌈', '🌈', '🌈', '🌈'] },
  { value: 8, name: 'Восемь', color: 'bg-pink-400', emoji: '🐙', items: ['🐙', '🐙', '🐙', '🐙', '🐙', '🐙', '🐙', '🐙'] },
  { value: 9, name: 'Девять', color: 'bg-teal-400', emoji: '🎈', items: ['🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈'] },
];

export const APP_TITLE = "Учим Цифры";
