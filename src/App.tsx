import React, {useEffect, useState} from 'react';
import './App.scss';
import {useDispatch} from "react-redux";
import {getAllTasks, getAllTodolists} from "./util/slices/todolistSlice";
import {TodoListContainer} from "./pages/TodoListContainer";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getAllTodolists())
      dispatch(getAllTasks())
  }, [dispatch])

  return (
    <div className="App">
      <TodoListContainer />
    </div>
  );
}

export default App;
