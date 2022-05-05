import React from 'react';
import styles from './index.module.scss';

interface iButton {
  className: string;
  children: React.ReactNode;
}

export const Button: React.FC<iButton> = ({className, children}) => {
  return (
    <button className={`${styles.button} ${className}`}>{children}</button>
  );
};

