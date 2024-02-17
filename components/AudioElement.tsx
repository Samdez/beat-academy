'use client';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { PlayCircle } from 'lucide-react';

export default function AudioElement({
  path,
  index,
  isRightAnswer,
}: {
  path: string;
  isRightAnswer?: boolean;
  index?: number;
}) {
  function play() {
    new Audio(path).play();
  }
  console.log(path, isRightAnswer);

  return (
    <div className='flex items-center gap-2'>
      {index !== undefined ? index + 1 : ''}
      <Button
        className={cn('w-20 text-secondary', { 'bg-green-400': isRightAnswer })}
        onClick={play}
      >
        <PlayCircle />
      </Button>
    </div>
  );
}
