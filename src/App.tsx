import React, {useEffect, useState} from 'react';
import './App.scss';
import {useDispatch} from "react-redux";
import {getAllTasks, getAllTodolists} from "./util/slices/todolistSlice";
import {TodoListContainer} from "./pages/TodoListContainer";
import {Loading} from "./components/Loading/Loading";
import {Login} from "./pages/Login/Login";
import {Route, Routes} from 'react-router-dom';
import {ROUTES} from "./common/routes";

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
    <div className="App">
      <Routes>
        <Route path={'/'} element={loading ? <Login/> : <TodoListContainer/>}/>
        <Route path={ROUTES.todolist} element={<TodoListContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
