import React from "react";
import {TaskType} from "../../util/api/tasksAPI";
import "./Tasks.scss"

interface Props {
  task: TaskType,
  todolistID: string
}

export const Task: React.FC<Props> = ({task, todolistID}) => {

  return (
    <div key={task.id} className='t-container'>
      <div className='t-container__content'>
        <span className='t-container__title'>{task.title}</span>
      </div>
    </div>
  )
}
