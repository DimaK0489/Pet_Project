import React from "react";
import {Todolist} from "./Todolist/Todolist";
import './stylesTodolistContainer.scss'
import {AddForm} from "../../components/AddForm/AddForm";
import {useAddTodolistMutation, useDeleteTodolistMutation} from "../../util/rtkAPi/todolistAPI";
import {TodolistType} from "../../util/rtkAPi/typesForTodolist";

interface Props {
  data: TodolistType[] | undefined
}

export const TodoListContainer = ({data}: Props) => {
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
          return <div key={item.id} className='tc-container__content'>
            <Todolist
              key={item.id}
              todolistId={item.id}
              title={item.title}
              onDeleteTodolist={handleDeleteTodolist}
            />
          </div>
        })
      }
    </div>
  );
}
