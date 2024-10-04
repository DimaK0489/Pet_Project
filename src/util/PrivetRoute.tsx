import React, {useEffect, useMemo} from "react";
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/store";
import {getAllTodolists, getTodolistsSelector} from "./slices/todolistSlice";
import {ROUTES} from "../common/routes";
import {getAllTasks} from "./slices/tasksSlice";

interface Props {
  component: any;
  authenticated: boolean;
  path: string
  rest?: any;
}

export const LookupsDataContext = React.createContext({});

export const PrivateRoute: React.FC<Props> = ({component: Component, authenticated, path, ...rest}: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const todolists = useSelector(getTodolistsSelector);
  //const tasks = useSelector(getTasksSelector);

  useEffect(() => {
    if (authenticated) {
      dispatch(getAllTodolists())
      //dispatch(getAllTasks())
    }
  }, [authenticated, dispatch])

  const value = useMemo(() => ({
    todolists,
    //tasks
  }), [todolists])

  return (
    <Route {...rest} element={(props: any) =>
      authenticated ? (
        <LookupsDataContext.Provider value={value}>
          <Component {...props} />
        </LookupsDataContext.Provider>
      ) : (
        <Route element={ROUTES.login}/>
      )
    }/>
  )
}
