import * as React from "react";

import styles from "./index.module.scss"
import { en } from "../../constants/wording";
import { KeyboardEvent } from "react";


const TodoInput = () => {
  
  const handleEnterPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
    }
  }
  
  
  return (
    <div className={styles.inputWrapper}>
      <input
        placeholder={en.TODO_INPUT_PLACEHOLDER}
        type="text"
        className={styles.input}
        onKeyPress={handleEnterPress}
      />
    </div>
  )
}

export default React.memo(TodoInput)
