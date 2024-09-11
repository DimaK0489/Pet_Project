import React, {useEffect, useState} from 'react';
import './App.scss';
import {useDispatch} from "react-redux";
import {getAllTasks, getAllTodolists} from "./util/slices/todolistSlice";
import {TodoListContainer} from "./pages/Todolist/TodoListContainer";
import {Login} from "./pages/Login/Login";
import {Route, Routes} from 'react-router-dom';
import {ROUTES} from "./common/routes";
import {getToken} from "./util/api";

const App: React.FC = () => {
  let authenticated = !!getToken();
  console.log(authenticated)
  const dispatch = useDispatch();
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    if (authenticated) {
      dispatch(getAllTodolists())
      dispatch(getAllTasks())
    }
  }, [authenticated, dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={!authenticated ? <Login/> : <TodoListContainer/>}/>
        <Route path={ROUTES.todolist} element={<TodoListContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
