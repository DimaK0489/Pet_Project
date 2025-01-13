import React, {useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {TodoListContainer} from "./pages/TodolistContainer/TodoListContainer";
import {Loading} from "./components/Loading/Loading";
import {useGetTodolistsQuery} from "./util/rtkAPi/todolistAPI";
import {ROUTES} from "./common/routes";
import {getToken} from "./util/api";
import {Calendar} from "./pages/Calendar/Calendar";

export const TDRoutes = () => {
  let authenticated = !!getToken();
  const navigate = useNavigate();
  const {data: todolists, isLoading} = useGetTodolistsQuery();

  useEffect(() => {
      if (authenticated) {
        navigate(ROUTES.todolist)
      }
    }, [authenticated]
  );

  return (
    <>
      {isLoading && <Loading/>}
      <Routes>
        <Route path="/" element={authenticated ? <TodoListContainer resultData={todolists}/> : <Login/>}/>
        <Route path={ROUTES.login} element={<Login/>}/>
        <Route path={ROUTES.todolist} element={authenticated ? <TodoListContainer resultData={todolists}/> : <Login/>}/>
        <Route path={ROUTES.calendar} element={authenticated ? <Calendar /> : <Login/>}/>
      </Routes>
    </>
  );
}
