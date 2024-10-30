import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodolist, deleteTodolist, getTodolistsSelector, updateStateData} from "../../util/slices/todolistSlice";
import {Todolist} from "./Todolist/Todolist";
import {getTasksSelector} from "../../util/slices/tasksSlice";
import './stylesTodolistContainer.scss'
import {AppDispatch} from "../../store/store";
import {AddForm} from "../../components/AddForm/AddForm";

interface Props {
}

export const TodoListContainer = ({}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const allTodolists = useSelector(getTodolistsSelector);
  const tasks = useSelector(getTasksSelector);

  const onDeleteTodolist = (todolistId: string) => {
    const updateState = allTodolists.filter((item) => {
      return item.id !== todolistId
    })
    dispatch(deleteTodolist(todolistId))
    dispatch(updateStateData(updateState))
  }

  const addNewTodolist = useCallback(async (title: string) => {
    await dispatch(addTodolist(title))
  }, [])

  return (
    <div className='tc-container'>
      <div className='tc-container__form'>
        <AddForm addItem={addNewTodolist} />
      </div>
      {
        allTodolists.map((item: any) => {
          let allTasks = tasks[item.id]
          return <div key={item.id} className='tc-container__content'>
            <Todolist
              key={item.id}
              todolistId={item.id}
              title={item.title}
              tasks={allTasks}
              onDeleteTodolist={onDeleteTodolist}
            />
          </div>
        })
      }
    </div>
  );
}
