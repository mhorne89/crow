import styles from './Bird.module.scss';

import { BirdConfig } from 'Components/Transition/Transition.types';

export const Bird = ({ delay, size, positionY }: BirdConfig) => {
  const style = {
    transform: `scale(${size})`,
    animationDelay: `${delay}ms`,
    top: positionY,
  };

  return (
    <>
      <div className={styles.image} style={style}></div>
    </>
  );
};
