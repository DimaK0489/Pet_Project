import React from "react";
import "./Tasks.scss"
import {TaskType} from "../../util/rtkAPi/typesForTasks";
import {EditField} from "../EditField/EditField";

interface Props {
  task: TaskType,
  todolistID: string
}

export const Task: React.FC<Props> = ({task, todolistID}) => {
  const changeTaskTitle = () => {

  }
  return (
    <div key={task.id} className='t-container'>
      <div className='t-container__content'>
        <h5 className='t-container__title'>
          <EditField title={task.title}
                     onChangeItem={changeTaskTitle}/>
        </h5>
      </div>
    </div>
  )
}
