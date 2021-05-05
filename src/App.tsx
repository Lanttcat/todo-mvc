import React from 'react';
import './app.module.scss';
import { Header } from "./components";
import TodoInput from "./components/input";

import styles from "./app.module.scss"

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <TodoInput />
      </main>
    </div>
  );
}

export default App;
