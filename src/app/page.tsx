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

  useEffect(() => {
    if (round?.getHasDrawn()) {
      round?.inspectRound();
    }
  }, [round?.getHasDrawn()]);

  if (!round) {
    return <div className="text-white">Please Wait</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <div className="text-white font-bold mb-[24px]">{round.getScore()}</div>
      {round.drawRound()}
    </div>
  );
}
