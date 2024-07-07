import React from "react";

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1 >
        <span>:D</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>к сожалению ничего тут нету</p>
    </div>
  );
};

export default NotFoundBlock;