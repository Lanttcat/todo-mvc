import React from 'react';
import './app.module.scss';
import { Header, TaskInput, TaskList } from "./components";
import { todoListSelector } from "./states/selectors/todo";
import { useRecoilState, useRecoilValue } from "recoil";

import styles from "./app.module.scss"
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
        <TaskInput />
        <TaskList tasks={todoList} onRemoveTask={handleRemoveTask}/>
      </main>
    </div>
  );
}

export default App;
