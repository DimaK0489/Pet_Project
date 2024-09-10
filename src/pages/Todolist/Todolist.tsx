import React from "react";
import styles from './stylesTodolist.module.scss'

interface Props {
  todolist: any
  id: string
  tasks: any
}

export const Todolist: React.FC<Props> = ({todolist, id, tasks}: Props) => {

  return (
    <div className={styles.container}>
      <h4>{todolist.title}</h4>
    </div>
  );
}
