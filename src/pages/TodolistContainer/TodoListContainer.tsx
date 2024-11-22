import React from "react";
import {useSelector} from "react-redux";
import {Todolist} from "./Todolist/Todolist";
import {getTasksSelector} from "../../util/slices/tasksSlice";
import './stylesTodolistContainer.scss'
import {AddForm} from "../../components/AddForm/AddForm";
import {useAddTodolistMutation, useDeleteTodolistMutation} from "../../util/rtkAPi/todolistAPI";

interface Props {
  data: any
}

export const TodoListContainer = ({data}: Props) => {
  const tasks = useSelector(getTasksSelector);
  const [addTodolist] = useAddTodolistMutation();
  const [deleteTodolist] = useDeleteTodolistMutation();

  const handleDeleteTodolist = (todolistId: string) => {
    deleteTodolist(todolistId)
  }
  const handleAddTodolist = async (title: string) => {
    await addTodolist({title});
    alert("User created successfully!");
  };

  return (
    <div className='tc-container'>
      <div className='tc-container__form'>
        <AddForm addItem={handleAddTodolist}/>
      </div>
      {
        data && data?.map((item: any) => {
          let allTasks = tasks[item.id]
          return <div key={item.id} className='tc-container__content'>
            <Todolist
              key={item.id}
              todolistId={item.id}
              title={item.title}
              tasks={allTasks}
              onDeleteTodolist={handleDeleteTodolist}
            />
          </div>
        })
      }
    </div>
  );
}
