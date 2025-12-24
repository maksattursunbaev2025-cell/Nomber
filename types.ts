
export interface NumberData {
  value: number;
  name: string;
  color: string;
  emoji: string;
  items: string[];
}

export enum AppState {
  HOME = 'HOME',
  LEARN = 'LEARN',
  GAME = 'GAME',
  QUIZ = 'QUIZ'
}

export interface GameState {
  currentNumber: number;
  options: number[];
  isCorrect: boolean | null;
  score: number;
}
