import React from "react";
import {
  useAddTaskMutation,
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation
} from "../../../util/api/tasksAPI";
import './stylesTodolist.scss'
import {Task} from "../../../components/Task/Task";
import DeleteIcon from '@mui/icons-material/Delete';
import {Loading} from "../../../components/Loading/Loading";
import {EditField} from "../../../components/EditField/EditField";
import {AddForm} from "../../../components/AddForm/AddForm";

interface Props {
  todolistId: string
  title: string
  onDeleteTodolist: (todolistId: string) => void
  onChangeTitleForTodolist: (todolistId: string, title: string) => void
}

export const Todolist: React.FC<Props> = ({todolistId, title, onDeleteTodolist, onChangeTitleForTodolist}: Props) => {
  const {data: tasks, isLoading} = useGetTasksQuery(todolistId);
  const [addTask] = useAddTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const onChangeTodoListTitle = (newTitle: string) => {
    onChangeTitleForTodolist(todolistId, newTitle)
  }

  const handleAddTask = async (title: string) => {
    await addTask({title, todolistId})
  }

  const handleDeleteTask = async (todolistId: string, taskId: string) => {
    await deleteTask({todolistId, taskId})
  }

  const handleUpdateTask = async (todolistId: string, taskId: string, title: string) => {
    await updateTask({todolistId, taskId, title})
  }

  return (
    <div key={todolistId} className='tl-container'>
      {isLoading && <Loading/>}
      <div className='tl-container__header'>
        <h4 className='tl-container__title'>
          <EditField title={title}
                     onChangeItem={onChangeTodoListTitle}/>
        </h4>
        <DeleteIcon className='t-container__deleteIcon' color={'error'} onClick={() => onDeleteTodolist(todolistId)}/>
      </div>
      <div className='tl-container__content'>
        <div className='tl-container__addForm'>
          <AddForm titleForComponent={'Enter title for Task'} addItem={handleAddTask}/>
        </div>
        <div className='tl-container__tasks'>
          {!tasks?.items.length && <div className={'tl-container__empty'}>No task</div>}
          {tasks?.items.map(task => <Task key={task.id}
                                          task={task}
                                          todolistID={todolistId}
                                          removalTask={handleDeleteTask}
                                          refreshTask={handleUpdateTask}
          />)}
        </div>
      </div>
    </div>
  );
}
