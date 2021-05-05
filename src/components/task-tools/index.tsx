import * as React from "react";

import styles from './index.module.scss'
import { ALL_FILTER } from "../../constants/task";

interface IProps {
  leftCount: number
  showClear: boolean
  onFilter: (by: taskFilterType) => void
  onClearCompleted: () => void
}

const TaskTools: React.FC<IProps> = ({leftCount, onFilter, onClearCompleted, showClear}) => {
  return (
    <div className={styles.tools}>
      <span>
        {leftCount} items left
      </span>
      <p className={styles.filter}>
        {
          ALL_FILTER.map((x) => (
            <>
              <input onClick={() => onFilter(x)} type="radio" name='filter' id={x}/>
              <label key={x} htmlFor={x}>{x}</label>
            </>
          ))
        }
      </p>
      <button style={{visibility: showClear ? 'unset' : 'hidden'}} className={styles.clear} onClick={onClearCompleted}>Clear completed</button>
    </div>
  )
}

export default React.memo(TaskTools)
