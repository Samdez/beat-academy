'use client';
import { useRef, useState } from 'react';
import AudioElement from './AudioElement';
import { Button } from './ui/button';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { cn } from '@/lib/utils';
import { log } from 'console';

export default function Exercice() {
  const responsePath = 'Snare_1.wav';
  const paths = ['Snare_1.wav', 'Snare_2.wav'];
  const [answer, setAnswer] = useState('');
  const [hasBeenAnswered, setHasBeenAnswered] = useState(false);

  function handleSubmit() {
    setHasBeenAnswered(true);
    if (answer === responsePath) {
      return;
    }
  }

  return (
    <div className='flex w-full flex-col items-center gap-8'>
      Listen to this sound:
      <AudioElement path={responsePath} />
      Can you recognize it ?
      <div className='flex flex-col items-center gap-2'>
        <RadioGroup onValueChange={(e) => setAnswer(e)}>
          {paths.map((pathName, i) => (
            <div className='flex items-center gap-2' key={pathName}>
              <AudioElement
                path={pathName}
                index={i}
                isRightAnswer={hasBeenAnswered && pathName === responsePath}
              />
              <RadioGroupItem
                value={pathName}
                id={pathName}
                disabled={hasBeenAnswered}
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
    </div>
  );
}
