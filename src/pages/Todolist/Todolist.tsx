import React, {useEffect} from "react";
import styles from './stylesTodolist.module.scss'
import {TodolistDomainType} from "../../util/slices/todolistSlice";
import {TaskType} from "../../util/api/todolistApi";
import {useDispatch, useSelector} from "react-redux";
import {getAllTasks, getTasksSelector} from "../../util/slices/tasksSlice";
import {AppDispatch} from "../../store/store";
import {Task} from "../../components/Task/Task";

interface Props {
  todolist: TodolistDomainType
  tasks: TaskType[]
}

export const Todolist: React.FC<Props> = ({todolist, tasks}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const {isLoading, items}  = useSelector(getTasksSelector);

  useEffect(() => {
    dispatch(getAllTasks(todolist.id));
  }, [])

  return (
    <div key={todolist.id} className={styles.container}>
      <h4>{todolist.title}</h4>
      {/*{!tasks.length && <div style={{padding: '10px', color: 'grey'}}>No task</div>}*/}
      {tasks?.map(task => <Task key={task.id} task={task} todolistID={todolist.id}/>)}
    </div>
  );
}
