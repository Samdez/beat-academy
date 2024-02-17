'use client';
import { useState } from 'react';
import AudioElement from './AudioElement';
import { Button } from './ui/button';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

const PATHS = [
  {
    questionNumber: 1,
    paths: ['questions/1/Snare_1.wav', 'questions/1/Snare_2.wav'],
    answerPath: 'questions/1/Snare_1.wav',
  },
  {
    questionNumber: 2,
    paths: [
      'questions/2/Kick 909.wav',
      'questions/2/Kick Airbase1.wav',
      'questions/2/Kick AmonTobin 1.wav',
    ],
    answerPath: 'questions/2/Kick AmonTobin 1.wav',
  },
  {
    questionNumber: 3,
    paths: [
      'questions/3/ClosedHH 808.wav',
      'questions/3/ClosedHH Kingsto 1.wav',
      'questions/3/ClosedHH Licorice 2.wav',
    ],
    answerPath: 'questions/3/ClosedHH Kingsto 1.wav',
  },
] as const;

export default function Exercice() {
  const [answer, setAnswer] = useState('');
  const [hasBeenAnswered, setHasBeenAnswered] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const currentQuestion = PATHS[questionNumber - 1];

  function handleSubmit() {
    setHasBeenAnswered(true);
    if (answer === currentQuestion.answerPath) {
      return;
    }
  }

  function handleNextQuestion() {
    setQuestionNumber((prev) => prev + 1);
    setAnswer('');
    setHasBeenAnswered(false);
  }

  return (
    <div className='flex w-full flex-col items-center gap-8'>
      Listen to this sound:
      <AudioElement path={currentQuestion.answerPath} />
      Can you recognize it ?
      <div className='flex flex-col items-center gap-2'>
        <RadioGroup onValueChange={(e) => setAnswer(e)}>
          {currentQuestion.paths.map((pathName) => (
            <div className='flex items-center gap-2' key={pathName}>
              <AudioElement
                path={pathName}
                isRightAnswer={
                  hasBeenAnswered && pathName === currentQuestion.answerPath
                }
                isWrongAnswer={
                  hasBeenAnswered && pathName !== currentQuestion.answerPath
                }
              />
              <RadioGroupItem
                value={pathName}
                id={pathName}
                disabled={hasBeenAnswered}
                onChange={() => setAnswer(pathName)}
                checked={answer === pathName}
              />
            </div>
          ))}
        </RadioGroup>
      </div>
      <Button
        className='w-20'
        onClick={handleSubmit}
        disabled={hasBeenAnswered || answer === ''}
      >
        Submit
      </Button>
      <div>
        Question {questionNumber} / {PATHS.length}
      </div>
      <Button
        disabled={!hasBeenAnswered || questionNumber === PATHS.length}
        onClick={handleNextQuestion}
      >
        Next question
      </Button>
    </div>
  );
}
