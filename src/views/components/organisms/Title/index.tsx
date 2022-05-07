import React from 'react';
import styles from './index.module.scss';

import { Button } from '../../atoms/button';

export const Title: React.FC = () => {
  return (
    <section className={styles.title}>
      <div className={styles.inner}>
        <h1 className={styles.h1}>Next Biggest Expedition in the World of Cryptocurrency</h1>
        <Button className={styles.button}>Discover Marketplace</Button>
      </div>
      <div className={styles.effect}></div>
    </section>
  );
};
