import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

import { Transition } from 'Components/Transition/Transition';

import { Crow } from 'Components/Crow/Crow';

export default function Home() {
  const [triggerTransition, setTriggerTransition] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = (href: string) => {
    setTriggerTransition(true);

    setTimeout(() => {
      router.push(href);
    }, 4000);
  };

  return (
    <div className='container'>
      <Head>
        <title>Jonathan Crow</title>
        <meta name='description' content='Jonathan Crow likes penis' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main className='main'>
        <h1>Jonathan Crow</h1>
        <p>I&apos;m a passionate Entrepreneur with a love of Photography, Jewellery Smithing and Acting.</p>
        <button onClick={() => handleClick('/about')}>About me</button>

        <Crow />

        { triggerTransition && <Transition /> }
      </main>
    </div>
  );
}
