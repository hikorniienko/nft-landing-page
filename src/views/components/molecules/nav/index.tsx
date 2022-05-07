import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.scss';

export const Nav: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.classList.add('nav--open');
    } else {
      document.body.classList.remove('nav--open');
    } 
  }, [active]);

  return (
    <nav className={styles.nav}>
      <div className={styles.button} aria-label="open menu" onClick={() => {setActive(true);}}>
        <svg
          width="22"
          height="17"
          viewBox="0 0 22 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="22" height="2.4257" rx="1" />
          <rect y="7.28711" width="22" height="2.4257" rx="1" />
          <rect y="14.5743" width="22" height="2.4257" rx="1" />
        </svg>
      </div>
      <div className={`${styles.menu} ${active && styles.active}`} onClick={() => {setActive(false);}}>
        <ul>
          <li>
            <a href="#">Discover</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Artists</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
