'use client';

import { Round } from '@/libs/Round';
import { useState, useEffect } from 'react';

export default function Home() {
  const [round, setRound] = useState<Round | undefined>(undefined);

  useEffect(() => {
    setRound(Round.create());
  }, []);

  if (!round) {
    return <div>Please Wait</div>;
  }

  return (
    <div className='flex flex-col justify-center items-center gap-1'>
      {round.drawRound()}
    </div>
  );
}
