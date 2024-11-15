import React from "react";
import {Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {TodoListContainer} from "./pages/TodolistContainer/TodoListContainer";
import {ROUTES} from "./common/routes";
import {getToken} from "./util/api";
import {Loading} from "./components/Loading/Loading";
import {useGetTodolistsQuery} from "./util/rtkAPi/todolistAPI";

export const TDRoutes = () => {
  let authenticated = !!getToken();
  const { data: todolists, isLoading } = useGetTodolistsQuery();

  return (
    <>
      {isLoading && <Loading/>}
      <Routes>
        <Route path={'/'} element={!authenticated ? <Login/> : <TodoListContainer data={todolists}/>}/>
        <Route path={ROUTES.todolist} element={<TodoListContainer data={todolists}/>}/>
      </Routes>
    </>
  );
}
