import './App.css';
import React,{useEffect, useContext} from 'react';
import {BrowserRouter, Switch, Route, useHistory} from "react-router-dom"

import AccountProvider from './context/AccountProvider';
import Routing from './components/Routing';

function App() {
  return (
    <BrowserRouter>
    
          <AccountProvider>
            <Routing/>
          </AccountProvider>
        
    </BrowserRouter>
    
  );
}

export default App;
