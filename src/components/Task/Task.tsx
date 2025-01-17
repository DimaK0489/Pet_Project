import React from "react";
import "./Tasks.scss"
import {TaskType} from "../../util/rtkAPi/typesForTasks";
import {EditField} from "../EditField/EditField";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface Props {
  task: TaskType
  todolistID: string
  removalTask: (todolistId: string, taskId: string) => void
  refreshTask: (todolistId: string, taskId: string, title: string) => void
}

export const Task: React.FC<Props> = ({task, todolistID, removalTask, refreshTask}) => {
  const changeTaskTitle = (newTitle: string) => {
    refreshTask(todolistID, task.id, newTitle)
  }

  const removeTask = () => {
    removalTask(todolistID, task.id)
  }

  return (
    <div key={task.id} className='t-container'>
      <div className='t-container__content'>
        <h5 className='t-container__title'>
          <EditField title={task.title}
                     onChangeItem={changeTaskTitle}/>
        </h5>
        <HighlightOffIcon className='t-container__deleteIcon'
                          color={'error'}
                          onClick={removeTask}/>
      </div>
    </div>
  )
}
