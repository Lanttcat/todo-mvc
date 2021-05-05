import React, { useEffect, useState } from 'react';
import './app.module.scss';
import { Header, TaskInput, TaskList, TaskTools } from "./components";
import { todoListSelector } from "./states/selectors/todo";
import { useRecoilState, useRecoilValue } from "recoil";

import styles from "./app.module.scss"
import { todoListState } from "./states/atoms/todo";

function App() {
  const todoList = useRecoilValue(todoListSelector);
  const [_, setTodoList] = useRecoilState(todoListState);
  const activeTask = todoList.filter(x => x.status !== 'done')
  const [showTaskList, setShowTaskList] = useState<Task[]>([])
  const [filter, setFilter] = useState<taskFilterType>('all')
  
  useEffect(() => {
    if (filter === 'all') {
      setShowTaskList(todoList)
    }
    if (filter === 'done') {
      setShowTaskList(todoList.filter(x => x.status === 'done'))
    }
    if (filter === 'active') {
      setShowTaskList(todoList.filter(x => x.status === 'active'))
    }
  }, [filter, todoList])
  
  const handleTaskComplete = (task: Task) => {
    const newList: Task[] = todoList.map(x => {
      if (x.id === task.id) {
        return  {...task, ...{ status: 'done'}}
      }
      return x
    })
    setTodoList([...newList])
  }
  
  const handleRemoveTask = (task: Task) => {
    const newTasks = todoList.filter(x => x.id !== task.id)
    setTodoList(newTasks)
  }
  
  const handleTaskFilter = (by: taskFilterType) => {
    setFilter(by)
  }
  
  const handleClearCompleted = () => {
    setTodoList(todoList.filter(x => x.status === 'active'))
  }
  
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <TaskInput />
        <TaskList tasks={showTaskList} onComplete={handleTaskComplete}  onRemoveTask={handleRemoveTask}/>
        <TaskTools
          onFilter={handleTaskFilter}
          leftCount={activeTask.length}
          onClearCompleted={handleClearCompleted}
        />
      </main>
    </div>
  );
}

export default App;
