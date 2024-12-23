import React from "react";
import {useGetTasksQuery} from "../../../util/api/tasksAPI";
import './stylesTodolist.scss'
import {Task} from "../../../components/Task/Task";
import DeleteIcon from '@mui/icons-material/Delete';
import {Loading} from "../../../components/Loading/Loading";
import {EditField} from "../../../components/EditField/EditField";

interface Props {
  todolistId: string
  title: string
  onDeleteTodolist: (todolistId: string) => void
  onChangeTitleForTodolist: (todolistId: string, newTitle: string) => void
}

export const Todolist: React.FC<Props> = ({todolistId, title, onDeleteTodolist, onChangeTitleForTodolist}: Props) => {
  const {data: tasks, isLoading} = useGetTasksQuery(todolistId);

  return (
    <div key={todolistId} className='tl-container'>
      {isLoading && <Loading/>}
      <div className='tl-container__header'>
        <h4 className='tl-container__title'>
          <EditField title={title}
                     onChangeItem={() => onChangeTitleForTodolist(todolistId, title)}/>
        </h4>
        <DeleteIcon color={'error'} onClick={() => onDeleteTodolist(todolistId)}/>
      </div>
      <div className='tl-container__content'>
        {!tasks?.items.length && <div className={'tl-container__empty'}>No task</div>}
        {tasks?.items.map(task => <Task key={task.id} task={task} todolistID={todolistId}/>)}
      </div>
    </div>
  );
}
