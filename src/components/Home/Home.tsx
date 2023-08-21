import React from 'react';
import styles from "./Home.module.css"

export default function Home():JSX.Element {
  return (
    <div className={styles.container}>
         <div className={styles.text}>
    <p> "Anyone can cook, but only fearless can be great."
        - Chef Auguste Gusteau </p>
  </div>
    </div>
  );
}
