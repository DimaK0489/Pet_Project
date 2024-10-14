import React from "react";
import {useSelector} from "react-redux";
import {getTodolistsSelector} from "../../util/slices/todolistSlice";
import {Todolist} from "./Todolist/Todolist";
import {getTasksSelector} from "../../util/slices/tasksSlice";
import './stylesTodolistContainer.scss'

interface Props {
}

export const TodoListContainer = ({}: Props) => {
  const allTodolists = useSelector(getTodolistsSelector);
  const tasks = useSelector(getTasksSelector);
  const todolists = Object.values(allTodolists);

  return (
    <div className={'tc-container'}>
      {
        todolists.map((item) => {
          let allTasks = tasks[item.id]
          return <div key={item.id} className='tc-container__content'>
            <Todolist
              key={item.id}
              todolistId={item.id}
              title={item.title}
              tasks={allTasks}
            />
          </div>
        })
      }
    </div>
  );
}
