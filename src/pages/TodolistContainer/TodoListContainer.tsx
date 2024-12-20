import React from "react";
import {Todolist} from "./Todolist/Todolist";
import './stylesTodolistContainer.scss'
import {AddForm} from "../../components/AddForm/AddForm";
import {useAddTodolistMutation, useDeleteTodolistMutation} from "../../util/rtkAPi/todolistAPI";
import {TodolistType} from "../../util/rtkAPi/typesForTodolist";
import {AppAlert} from "../../components/AppAlert/AppAlert";

interface Props {
  resultData: TodolistType[] | undefined
}

export const TodoListContainer = ({resultData}: Props) => {
  const [addTodolist] = useAddTodolistMutation();
  const [deleteTodolist, {error}] = useDeleteTodolistMutation();

  const handleDeleteTodolist = async (todolistId: string) => {
    await deleteTodolist(todolistId)
  }
  const handleAddTodolist = async (title: string) => {
    await addTodolist({title});
  };

  return (
    <div className='tc-container'>
      {error && 'status' in error && <AppAlert message={error.data} />}
      <div className='tc-container__form'>
        <AddForm addItem={handleAddTodolist}/>
      </div>
      {
        resultData && resultData?.map((item: TodolistType) => {
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
