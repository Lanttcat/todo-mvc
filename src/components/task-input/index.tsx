import * as React from "react";

import styles from "./index.module.scss"
import { en } from "../../constants/wording";
import { KeyboardEvent, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListState } from "../../states/atoms/todo";
import { todoListSelector } from "../../states/selectors/todo";

interface IProps {}

const TaskInput: React.FC<IProps> = () => {
  const [task, setTask] = useState<string>('');
  const [_, setTodoList] = useRecoilState(todoListState);
  const todoList = useRecoilValue(todoListSelector);
  
  const handleEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !!task) {
      const newTask: Task = {
        id: Date.now(), // use Date.now temporarily
        createdAt: Date.now(),
        content: task!,
        status: 'active'
      }
      setTodoList([newTask, ...todoList])
      setTask('')
    }
  }
  
  
  return (
    <div className={styles.inputWrapper}>
      <input
        placeholder={en.TODO_INPUT_PLACEHOLDER}
        type="text"
        className={styles.input}
        value={task}
        onChange={(event) => setTask(event.target.value)}
        onKeyPress={handleEnterPress}
        title={'Input a new task'}
      />
    </div>
  )
}

export default React.memo(TaskInput)
