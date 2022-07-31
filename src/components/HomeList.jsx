import React from "react";
import MovieCard from "./MovieCard";

import styles from "./HomeList.module.css";

const HomeList = ({ arr, title }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles["card-container"]}>
        {arr.map(el => {
          return <MovieCard movie={el} key={el.id} />
        })}
      </div>
    </section>
  );
};

export default HomeList;
