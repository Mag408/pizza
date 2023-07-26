import React from "react";
import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        <span className="title"> Ничего не найдено</span>
      </h1>
      <p className="text">
        К сожелению данная страница не найдена в нашем интернет-магазине
      </p>
    </div>
  );
}

export default NotFoundBlock;
