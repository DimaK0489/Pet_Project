import React, {useEffect} from 'react';
import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import {getAllTodolists} from "./util/slices/todolistSlice";
import {TodoListContainer} from "./pages/TodolistContainer/TodoListContainer";
import {Login} from "./pages/Login/Login";
import {Route, Routes} from 'react-router-dom';
import {ROUTES} from "./common/routes";
import {getToken} from "./util/api";
import {authSelector} from "./util/slices/authSlice";
import {Loading} from "./components/Loading/Loading";
import {AppDispatch} from "./store/store";
import {Menu} from "./components/Menu/Menu";

const App: React.FC = () => {
  let authenticated = !!getToken();
  const dispatch = useDispatch<AppDispatch>();
  const {isFetching} = useSelector(authSelector);

  useEffect(() => {
    if (authenticated) {
      dispatch(getAllTodolists())
    }
  }, [authenticated, dispatch])

  return (
    <div className="App">
      <Menu/>
      {isFetching && <Loading/>}
      <Routes>
        <Route path={'/'} element={!authenticated ? <Login/> : <TodoListContainer/>}/>
        <Route path={ROUTES.todolist} element={<TodoListContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
