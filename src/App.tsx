import React, {useEffect} from 'react';
import './App.scss';
import {Todolist} from "./pages/Todolist";
import {useDispatch} from "react-redux";
import {getAllTodolists} from "./util/slices/todolistSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodolists())
  }, [dispatch])

  return (
    <div className="App">
      <Todolist/>
    </div>
  );
}

export default App;
