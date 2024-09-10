import React, {useState} from "react";
import {useSelector} from "react-redux";
import {getTodolistsSelector, TasksStateType} from "../../util/slices/todolistSlice";
import {Todolist} from "./Todolist";
import {RootState} from "../../store/store";

interface Props {
}

export const TodoListContainer = ({}: Props) => {
  const allTodolists = useSelector(getTodolistsSelector);
  const tasks = useSelector<RootState, TasksStateType>(state => state.tasks)

  const renderTodolists = () => {
    return (
      <>
        {
          allTodolists.map((item) => {
            let allTasks = tasks[item.id]
            return <div key={item.id}>
              <Todolist
                id={item.id}
                todolist={item}
                tasks={allTasks}
              />
            </div>
          })
        }
      </>
    );
  }

  return (
    renderTodolists()
  );
}
