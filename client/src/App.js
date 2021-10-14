import './App.css';

import {BrowserRouter, Switch, Route} from "react-router-dom"

import Home from './components/home/Home';
import Navbar from './components/Navbar'
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="mb-8">
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/details" exact={true} component={DetailView}/>
          <Route path="/create" exact={true} component={CreateView} />
          <Route path="/update" exact={true} component={UpdateView} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
