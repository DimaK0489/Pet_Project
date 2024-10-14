import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {TodoListContainer} from "./pages/TodolistContainer/TodoListContainer";
import {ROUTES} from "./common/routes";
import {getToken} from "./util/api";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "./store/store";
import {authSelector} from "./util/slices/authSlice";
import {getAllTodolists} from "./util/slices/todolistSlice";
import {Loading} from "./components/Loading/Loading";

export const TDRoutes = () => {
  let authenticated = !!getToken();
  const dispatch = useDispatch<AppDispatch>();
  const {isFetching} = useSelector(authSelector);

  useEffect(() => {
    if (authenticated) {
      dispatch(getAllTodolists())
    }
  }, [authenticated, dispatch])
  return (
    <>
      {isFetching && <Loading/>}
      <Routes>
        <Route path={'/'} element={!authenticated ? <Login/> : <TodoListContainer/>}/>
        <Route path={ROUTES.todolist} element={<TodoListContainer/>}/>
      </Routes>
    </>
  );
}
