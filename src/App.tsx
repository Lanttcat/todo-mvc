import React from 'react';
import './app.module.scss';
import { Header } from "./components";
import TodoInput from "./components/input";
import { todoListSelector } from "./states/selectors/todo";
import { useRecoilValue } from "recoil";

import styles from "./app.module.scss"
import TodoList from "./components/todo-list";

function App() {
  const todoList = useRecoilValue(todoListSelector);
  
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <TodoInput />
        <TodoList tasks={todoList} />
      </main>
    </div>
  );
}

export default App;
