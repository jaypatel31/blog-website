import React,{useEffect, useContext} from 'react';
import {BrowserRouter, Switch, Route, useHistory} from "react-router-dom"

import Home from '../components/home/Home';
import Navbar from '../components/Navbar'
import DetailView from '../components/post/DetailView';
import CreateView from '../components/post/CreateView';
import UpdateView from '../components/post/UpdateView';
import LoginPage from '../components/account/LoginPage';
import { AccountContext } from '../context/AccountProvider';

const Routing = () => {
    const {account,setAccount} = useContext(AccountContext)
    const history = useHistory()
    useEffect(() => {
      let user = JSON.parse(localStorage.getItem('user'))
      console.log(user)
      if(!user){
        history.push('/login')
      }else{
        // setAccount(user)
        // history.push('/')
      }
    }, [])
  
    return(
          <>
          <Navbar/>
          <div className="mb-8">
            <Switch>
              <Route path="/" exact={true} component={Home}/>
              <Route path="/details/:id" exact={true} component={DetailView}/>
              <Route path="/create" exact={true} component={CreateView} />
              <Route path="/login" exact={true} component={LoginPage} />
              <Route path="/update/:id" exact={true} component={UpdateView} />
            </Switch>
            </div>
            </>
    )
  
  }

  export default Routing