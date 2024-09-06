import React, {useEffect, useState} from 'react';
import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import {getAllTasks, getAllTodolists, getTodolistsSelector} from "./util/slices/todolistSlice";
import {TodoListContainer} from "./pages/TodoListContainer";
import {Loading} from "./components/Loading/Loading";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  useEffect(() => {
    dispatch(getAllTodolists())
    dispatch(getAllTasks())
  }, [dispatch])

  return (
    loading
      ? <Loading/>
      : <div className="App">
        <TodoListContainer/>
      </div>
  );
}

export default App;
