import React from 'react';
import styles from './index.module.scss';

interface iInput {
  before?: React.ReactNode;
  after?: React.ReactNode;
  placeholder?: string;
  className?: string;
}

export const Input: React.FC<iInput> = ({
  before,
  after,
  placeholder,
  className,
}) => {
  return (
    <div className={styles.wrap}>
      {before && <div className={styles.before}>{before}</div>}
      <input className={`${styles.input} ${before && styles.inputBefore} ${after && styles.inputAfter} ${className}`} type="text" placeholder={placeholder} />
      {after && <div className={styles.after}>{after}</div>}
    </div>
  );
};
