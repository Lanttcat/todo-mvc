import * as React from 'react';
import Icon from "../icon";

import styles from './index.module.scss'

interface IProp {
  tasks: Task[]
}


const TodoList: React.FC<IProp> = ({tasks}) => {
  const renderTaskItem = (task: Task) => {
    return (
      <div key={task.id} className={styles.item}>
        <span className={styles.status}>
          <Icon type='seleted' className={styles.icon} />
        </span>
        <p className={styles.content}>
          {task.content}
        </p>
        <span className={styles.close}>
          <Icon type='close' className={styles.icon} />
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

export default React.memo(TodoList)
