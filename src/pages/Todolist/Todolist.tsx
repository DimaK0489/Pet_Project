import React, {useEffect} from "react";
import styles from './stylesTodolist.module.scss'
import {TaskType} from "../../util/api/todolistApi";
import {useDispatch} from "react-redux";
import {fetchTasks} from "../../util/slices/tasksSlice";
import {AppDispatch} from "../../store/store";
import {Task} from "../../components/Task/Task";

interface Props {
  todolistId: string
  tasks: TaskType[]
  title: string
}

export const Todolist: React.FC<Props> = ({tasks, todolistId, title}: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTasks(todolistId));
  }, [dispatch])

  return (
    <div key={todolistId} className={styles.container}>
      <h4>{title}</h4>
      {!tasks?.length && <div style={{padding: '10px', color: 'grey'}}>No task</div>}
      {tasks?.map(task => <Task key={task.id} task={task} todolistID={todolistId}/>)}
    </div>
  );
}
