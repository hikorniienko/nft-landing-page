import React from 'react';
import styles from './index.module.scss';

import { Logo } from '../../atoms/logo';
import { Button } from '../../atoms/button';
import { Input } from '../../atoms/input';
import { Nav } from '../../molecules/nav';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <Logo />
      </div>

      <div className={styles.searchWrap}>
        <Input
          className={styles.search}
          placeholder="Search related to NFT, Artist..."
          before={
            <svg
              width="24"
              height="27"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="11.7666"
                cy="13.5898"
                rx="8.98856"
                ry="9.62646"
                stroke="white"
                strokeOpacity="0.7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.0183 20.7852L21.5423 24.5495"
                stroke="white"
                strokeOpacity="0.7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </div>

      <div className={styles.buttonWrap}>
        <Button className={styles.button}>Connect Wallet</Button>
      </div>

      <div className={styles.navWrap}>
        <Nav />
      </div>
    </header>
  );
};
