import React from "react";
import "./Tasks.scss"
import {TaskType} from "../../util/rtkAPi/typesForTasks";

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
