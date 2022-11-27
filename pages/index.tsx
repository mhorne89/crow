/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

import { Transition } from 'Components/Transition/Transition';

import { Crow } from 'Components/Crow/Crow';

import styles from 'Styles/index.module.scss';

export default function Home() {
  const [triggerTransition, setTriggerTransition] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = (href: string) => {
    setTriggerTransition(true);

    setTimeout(() => {
      router.push(href);
    }, 2200);
  };

  return (
    <div className={`container ${ styles.container }`}>
      <Head>
        <title>Jonathan Crow</title>
        <meta name='description' content='Jonathan Crow likes penis' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main className={`main ${ styles.main }`}>
        <h1>Jonathan Crow</h1>
        <p>I&apos;m a passionate Entrepreneur with a love of Photography, Jewellery Smithing and Acting.</p>
        
        <div className={styles.buttonContainer}>
          <a className={styles.button} onClick={() => handleClick('/about')}>About me</a>
          <a className={styles.button} onClick={() => handleClick('/photography')}>Photography</a>
        </div>

        <div className={styles.socialLinks}>
          <a href='https://twitter.com/MrJonCrow' className='icon'>
            <img alt='Twitter' src='/twitter.svg' width='40' height='40' />
          </a>

          <a href='https://www.linkedin.com/in/mrjoncrow/' className='icon'>
            <img className='icon' alt='Linked In' src='/linkedin.svg' width='40' height='40' />
          </a>

          <a href='https://www.facebook.com/MrJonCr0w/' className='icon'>
            <img className='icon' alt='Facebook' src='/facebook.svg' width='40' height='40' />
          </a>

          <a href='https://www.instagram.com/mrjoncrow/' className='icon'>
            <img className='icon' alt='Instagram' src='/instagram.svg' width='40' height='40' />
          </a>
        </div>

        <Crow />

        {triggerTransition && <Transition />}
      </main>
    </div>
  );
}
