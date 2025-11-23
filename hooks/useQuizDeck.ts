import { useCallback, useMemo, useRef, useState } from "react";
import { courierRuns } from "@/data/quiz-data";

export interface QuizQuestion {
  id: string;
  address: string;
  correctAnswer: string;
  options: string[];
}

interface QuizDeckHook {
  currentQuestion: QuizQuestion | null;
  currentIndex: number;
  totalQuestions: number;
  nextQuestion: () => void;
  resetDeck: () => void;
  getProgress: () => { current: number; total: number };
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateAllStreetAddresses(): QuizQuestion[] {
  const allQuestions: QuizQuestion[] = [];

  const allRunNumbers = courierRuns.map(run => run.runNumber);

  function generateWrongOptions(correctRun: string, count: number = 3): string[] {
    const wrongOptions = allRunNumbers.filter(run => run !== correctRun);
    const shuffled = [...wrongOptions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  for (const run of courierRuns) {
    for (const street of run.wholeStreets) {
      const wrongOptions = generateWrongOptions(run.runNumber);
      const allOptions = [run.runNumber, ...wrongOptions].sort(() => Math.random() - 0.5);
      
      allQuestions.push({
        id: `${street}-${run.runNumber}`,
        address: street,
        correctAnswer: run.runNumber,
        options: allOptions,
      });
    }

    for (const splitStreet of run.splitStreets) {
      if (splitStreet.specificNumbers && splitStreet.specificNumbers.length > 0) {
        for (const num of splitStreet.specificNumbers) {
          const wrongOptions = generateWrongOptions(run.runNumber);
          const allOptions = [run.runNumber, ...wrongOptions].sort(() => Math.random() - 0.5);
          
          allQuestions.push({
            id: `${num}-${splitStreet.streetName}-${run.runNumber}`,
            address: `${num} ${splitStreet.streetName}`,
            correctAnswer: run.runNumber,
            options: allOptions,
          });
        }
      } else if (splitStreet.numberRange) {
        const { min, max } = splitStreet.numberRange;
        const sampleSize = Math.min(5, Math.floor((max - min + 1) / 2));
        
        for (let i = 0; i < sampleSize; i++) {
          let houseNumber = Math.floor(Math.random() * (max - min + 1)) + min;
          
          if (splitStreet.oddEven === "odd" && houseNumber % 2 === 0) {
            houseNumber = Math.min(houseNumber + 1, max);
          } else if (splitStreet.oddEven === "even" && houseNumber % 2 === 1) {
            houseNumber = Math.max(houseNumber - 1, min);
          }
          
          const wrongOptions = generateWrongOptions(run.runNumber);
          const allOptions = [run.runNumber, ...wrongOptions].sort(() => Math.random() - 0.5);
          
          allQuestions.push({
            id: `${houseNumber}-${splitStreet.streetName}-${run.runNumber}-${i}`,
            address: `${houseNumber} ${splitStreet.streetName}`,
            correctAnswer: run.runNumber,
            options: allOptions,
          });
        }
      } else {
        const randomNumber = Math.floor(Math.random() * 200) + 1;
        const wrongOptions = generateWrongOptions(run.runNumber);
        const allOptions = [run.runNumber, ...wrongOptions].sort(() => Math.random() - 0.5);
        
        allQuestions.push({
          id: `${randomNumber}-${splitStreet.streetName}-${run.runNumber}`,
          address: `${randomNumber} ${splitStreet.streetName}`,
          correctAnswer: run.runNumber,
          options: allOptions,
        });
      }
    }
  }

  return allQuestions;
}

export function useQuizDeck(): QuizDeckHook {
  const allQuestions = useMemo(() => generateAllStreetAddresses(), []);
  
  const [deck, setDeck] = useState<QuizQuestion[]>(() => shuffleArray(allQuestions));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const deckRef = useRef(deck);
  const currentIndexRef = useRef(currentIndex);
  
  deckRef.current = deck;
  currentIndexRef.current = currentIndex;

  const currentQuestion = useMemo(() => {
    if (currentIndex >= deck.length) {
      return null;
    }
    return deck[currentIndex];
  }, [deck, currentIndex]);

  const nextQuestion = useCallback(() => {
    const nextIndex = currentIndexRef.current + 1;
    
    if (nextIndex >= deckRef.current.length) {
      const reshuffled = shuffleArray(allQuestions);
      setDeck(reshuffled);
      setCurrentIndex(0);
    } else {
      setCurrentIndex(nextIndex);
    }
  }, [allQuestions]);

  const resetDeck = useCallback(() => {
    const reshuffled = shuffleArray(allQuestions);
    setDeck(reshuffled);
    setCurrentIndex(0);
  }, [allQuestions]);

  const getProgress = useCallback(() => {
    return {
      current: currentIndexRef.current + 1,
      total: deckRef.current.length,
    };
  }, []);

  return {
    currentQuestion,
    currentIndex,
    totalQuestions: deck.length,
    nextQuestion,
    resetDeck,
    getProgress,
  };
}
