import React, {useEffect} from "react";
import {TaskType} from "../../../util/api/todolistApi";
import {useDispatch} from "react-redux";
import {fetchTasks} from "../../../util/slices/tasksSlice";
import {AppDispatch} from "../../../store/store";
import './stylesTodolist.scss'
import {Task} from "../../../components/Task/Task";

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
    <div key={todolistId} className='tl-container'>
      <div className='tl-container__header'>
        <h4 className='tl-container__title'>{title}</h4>
      </div>
      <div className='tl-container__content'>
        {!tasks?.length && <div className={'tl-container__empty'}>No task</div>}
        {tasks?.map(task => <Task key={task.id} task={task} todolistID={todolistId}/>)}
      </div>
    </div>
  );
}
