import React from "react";
import styles from "./app.module.css";
import Jobs from "./features/Jobs";

function App() {
  return <main className={styles.main}>
    <Jobs/>
  </main>;
}

export default App;
