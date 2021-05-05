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
        <a
          title={`Complete ${task.content} task`}
          className={styles.status}
          onClick={() => onComplete(task)}
          href='/#'
          role="button">
          {
            task.status === 'done' &&
            <Icon type='seleted' className={styles.icon} />
          }
        </a>
        <p className={cn(styles.content, {[styles.done]: task.status === 'done'})}>
          {task.content}
        </p>
        <a
          href='/#'
          title={`Remove ${task.content} task`}
          className={styles.close}
        >
          <Icon role="remove-todo-item" type='close' className={styles.icon} onClick={() => onRemoveTask(task)}/>
        </a>
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
