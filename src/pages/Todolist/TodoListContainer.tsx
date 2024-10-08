import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {getTodolistsSelector} from "../../util/slices/todolistSlice";
import {Todolist} from "./Todolist";
import {getTasksSelector} from "../../util/slices/tasksSlice";
import {Loading} from "../../components/Loading/Loading";

interface Props {
}

export const TodoListContainer = ({}: Props) => {
  const allTodolists = useSelector(getTodolistsSelector);
  const tasks = useSelector(getTasksSelector)
  const todolists = Object.values(allTodolists)

  return (
    <>
      {
        todolists.map((item) => {
          let allTasks = tasks[item.id]
          return <div key={item.id}>
            <Todolist
              key={item.id}
              todolistId={item.id}
              title={item.title}
              tasks={allTasks}
            />
          </div>
        })
      }
    </>
  );
}
