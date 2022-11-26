/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect, MutableRefObject } from 'react';

import styles from './Crow.module.scss';

export const Crow = () => {
  const [crowHeadImage, setCrowHeadImage] = useState('/crow_head.png');
  const [crowHeadRotation, setCrowHeadRotation] = useState(0);
  const crowHead = useRef() as MutableRefObject<HTMLImageElement>;

  useEffect(() => {
    let rotation = Math.floor(crowHeadRotation * 90 + 220);

    if (rotation > 20) rotation = 20;
    if (rotation < -20) rotation = -15;

    crowHead?.current?.setAttribute('style', `transform: rotate(${rotation}deg)`);
  }, [crowHeadRotation, crowHeadImage]);

  useEffect(() => {
    document.onmousemove = (e) => {
      var dx = e.pageX - window.innerWidth;
      var dy = e.pageY - window.innerHeight;
      var theta = Math.atan2(dy, dx);
      setCrowHeadRotation(theta);
    };

    document.onclick = () => {
      var sound = document.createElement('audio');
      sound.src = '/caw.mp3';
      sound.play();

      setCrowHeadImage('/crow_head_open.png');
      setTimeout(() => setCrowHeadImage('/crow_head.png'), 500);
    };
  }, []);

  return (
    <>
      <img
        className={styles.crowHeadImage}
        src={crowHeadImage}
        ref={crowHead}
        height='300'
        width='300'
        alt="crow head"
      />

      <img
        className={styles.crowBodyImage}
        src='/crow_body.png'
        height='300'
        width='300'
        alt='crow body'
      />
    </>
  );
};
