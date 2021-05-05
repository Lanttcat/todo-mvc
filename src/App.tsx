import React from 'react';
import './app.module.scss';
import { Header } from "./components";
import TodoInput from "./components/input";
import { todoListSelector } from "./states/selectors/todo";
import { useRecoilState, useRecoilValue } from "recoil";

import styles from "./app.module.scss"
import TodoList from "./components/todo-list";
import { todoListState } from "./states/atoms/todo";

function App() {
  const todoList = useRecoilValue(todoListSelector);
  const [_, setTodoList] = useRecoilState(todoListState);
  
  const handleRemoveTask = (task: Task) => {
    const newTasks = todoList.filter(x => x.id !== task.id)
    setTodoList(newTasks)
  }
  
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <TodoInput />
        <TodoList tasks={todoList} onRemoveTask={handleRemoveTask}/>
      </main>
    </div>
  );
}

export default App;
