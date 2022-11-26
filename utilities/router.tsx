import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Transition } from 'Components/Transition/Transition';

export const router = (href: string) => {
  const [ triggerTransition, setTriggerTransition ] = useState<boolean>(false);
  const router = useRouter();

  setTriggerTransition(true);

  setTimeout(() => {
    router.push(href);
  }, 1000);

  return (
    triggerTransition && <Transition />
  );
};
