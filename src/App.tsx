import React from 'react';
import './App.scss';
import {Menu} from "./components/Menu/Menu";
import {TDRoutes} from "./Routes";
import {ReactComponent as BG} from "../src/images/bgDark.svg";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='App__background'>
        <BG/>
      </div>
      <Menu/>
      <TDRoutes/>
    </div>
  );
}

export default App;
