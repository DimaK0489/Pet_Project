import React from 'react';
import './App.scss';
import {Menu} from "./components/Menu/Menu";
import {TDRoutes} from "./Routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <Menu/>
      <TDRoutes/>
    </div>
  );
}

export default App;
