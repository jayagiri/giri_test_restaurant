import './App.css';
import Menu from './components/Menu';
import Admin from './components/Admin';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Reservation from './components/Reservation'
import Login from './components/Login'
import Register from './components/Register';

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/reservation' component={Reservation}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register }/>

        <Route component={Error} />

      </Switch>
    </main>
  )
}

export default App;
