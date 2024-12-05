import React from "react";
import {Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {TodoListContainer} from "./pages/TodolistContainer/TodoListContainer";
import {Loading} from "./components/Loading/Loading";
import {useGetTodolistsQuery} from "./util/rtkAPi/todolistAPI";
import {ROUTES} from "./common/routes";
import {useSelector} from "react-redux";
import {authSelector} from "./util/slices/authSlice";
import {getToken} from "./util/api";

export const TDRoutes = () => {
  let accessToken = !!useSelector(authSelector);
  let authenticated = !!getToken();
  const {data: todolists, isLoading} = useGetTodolistsQuery();

  return (
    <>
      {isLoading && <Loading/>}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path={ROUTES.login} element={<Login/>}/>
        <Route path={ROUTES.todolist} element={authenticated ? <TodoListContainer data={todolists}/> : <Login/>}/>
      </Routes>
    </>
  );
}
