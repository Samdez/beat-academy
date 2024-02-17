import Exercice from '@/components/Exercice';
import { ModeToggle } from '@/components/ModeToggle';

export default function Home() {
  return (
    <div className='flex h-screen w-full flex-col gap-4 p-8 sm:flex-row'>
      <ModeToggle />
      <div className='h-full border-2 border-secondary sm:w-1/2'>
        <div className='bg-secondary p-2 text-center'>Learn</div>
      </div>
      <div className='h-full border-2 border-secondary sm:w-1/2'>
        <div className='mb-8 bg-secondary p-2 text-center'>Practice</div>
        <Exercice />
      </div>
    </div>
  );
}
