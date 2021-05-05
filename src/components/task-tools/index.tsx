import * as React from "react";

import styles from './index.module.scss'
import { ALL_FILTER } from "../../constants/task";

interface IProps {
  leftCount: number
  onFilter: (by: taskFilterType) => void
  onClearCompleted: () => void
}

const TaskTools: React.FC<IProps> = ({leftCount, onFilter, onClearCompleted}) => {
  return (
    <div className={styles.tools}>
      <span>
        {leftCount} items left
      </span>
      <p className={styles.filter}>
        {
          ALL_FILTER.map((x) => <button onClick={() => onFilter(x)} key={x}>{x}</button>)
        }
      </p>
      <button className={styles.clear} onClick={onClearCompleted}>Clear completed</button>
    </div>
  )
}

export default React.memo(TaskTools)
