import React from "react";
import {useSelector} from "react-redux";
import {getTodolistsSelector} from "../../util/slices/todolistSlice";
import {Todolist} from "./Todolist";
import {RootState} from "../../store/store";
import {TasksStateType} from "../../util/slices/tasksSlice";

interface Props {
}

export const TodoListContainer = ({}: Props) => {
  const allTodolists = useSelector(getTodolistsSelector);
  const tasks = useSelector<RootState, TasksStateType>(state => state.tasks);
  console.log(allTodolists)
  return (
    <>
      {
        allTodolists.map((item) => {
          let allTasks = tasks[item.id]
          return <div key={item.id}>
            <Todolist
              todolist={item}
              tasks={allTasks}
            />
          </div>
        })
      }
    </>
  );
}
