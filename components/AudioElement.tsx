'use client';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { PlayCircle } from 'lucide-react';

export default function AudioElement({
  path,
  isRightAnswer,
  isWrongAnswer,
}: {
  path: string;
  isRightAnswer?: boolean;
  isWrongAnswer?: boolean;
}) {
  function play() {
    new Audio(path).play();
  }

  return (
    <div className='flex items-center gap-2'>
      <Button
        className={cn('w-20 text-secondary', {
          'bg-green-400': isRightAnswer,
          'bg-red-400': isWrongAnswer,
        })}
        onClick={play}
      >
        <PlayCircle />
      </Button>
    </div>
  );
}
