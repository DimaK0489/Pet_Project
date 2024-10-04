import React from "react";
import {TaskType} from "../../util/api/todolistApi";
import styles from './Tasks.module.scss'

interface Props {
  task: TaskType,
  todolistID: string
}

export const Task: React.FC<Props> = ({task, todolistID}) => {
  console.log(task)
  return (
    <div key={task.id} className={styles.container}>
      <span>{task.title}</span>
    </div>
  )
}
