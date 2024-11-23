'use client';

import { Round } from '@/libs/Round';
import { useState, useEffect } from 'react';

export default function Home() {
  const [round, setRound] = useState<Round | undefined>(undefined);

  useEffect(() => {
    setTimeout(() => {
      setRound(Round.create());
    }, 1000);
  }, []);

  if (!round) {
    return <div className="text-white">Please Wait</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-1">
      {round.drawRound()}
    </div>
  );
}
