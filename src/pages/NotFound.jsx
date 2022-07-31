import React from "react";

import styles from "./NotFound.module.css";
import empty from "../images/404.png";

const NotFound = () => {
  return (
    <section className={styles.container}>
      <div>
        <h1>There's nothing here.</h1>
        <img src={empty} alt="empty page" />
      </div>
    </section>
  );
};

export default NotFound;
