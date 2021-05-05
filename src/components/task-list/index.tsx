import * as React from 'react';
import { Icon } from '..';
import cn from "classnames"

import styles from './index.module.scss'

interface IProp {
  tasks: Task[]
  onRemoveTask: (task: Task) => void
  onComplete: (task: Task) => void
}


const TaskList: React.FC<IProp> = ({tasks, onRemoveTask, onComplete}) => {
  const renderTaskItem = (task: Task) => {
    return (
      <div key={task.id} className={styles.item}>
        <span className={styles.status} onClick={() => onComplete(task)} role="complete-todo-item">
          {
            task.status === 'done' &&
            <Icon type='seleted' className={styles.icon} />
          }
        </span>
        <p className={cn(styles.content, {[styles.done]: task.status === 'done'})}>
          {task.content}
        </p>
        <span className={styles.close}>
          <Icon role="remove-todo-item" type='close' className={styles.icon} onClick={() => onRemoveTask(task)}/>
        </span>
      </div>
    )
  }
  return (
    <div className={styles.list}>
      { tasks.map((x) => renderTaskItem(x))}
    </div>
  )
}

export default React.memo(TaskList)
