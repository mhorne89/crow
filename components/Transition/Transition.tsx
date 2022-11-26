import { useEffect, useState } from 'react';

import { Bird } from './Bird/Bird';
import { BirdConfig, BirdsState } from './Transition.types';

export const Transition = () => {
  const [birds, setBirds]: BirdsState = useState<any[]>([]);

  useEffect(() => {
    const res: BirdConfig[] = [...Array(500)].map((_, index) => {
      return {
        delay: (index * 4) / 3,
        size: Math.random(),
        positionY: Math.floor(Math.random() * (window.innerHeight + 1)),
      };
    });

    setBirds(res);
  }, []);

  return (
    <>
      {birds.map((item: BirdConfig, index: number) => {
        return <Bird key={index} delay={item.delay} size={item.size} positionY={item.positionY} />;
      })}
    </>
  );
};
