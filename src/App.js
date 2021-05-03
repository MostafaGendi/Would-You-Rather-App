import React, { Component } from'react'
import Nav from './components/nav'
import Login from './components/login'
import Poll from './components/poll'
import Leaderboard from './components/leadersBoard'
import Answered from './components/answered'
import Unanswered from './components/unanswered'
import PrivateRoute from './components/privateRoute'
import Home from './components/home'
import NewQ from './components/newQues'
import './App.css';
import * as handleData from './actions/shared'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleData.usersData())
    this.props.dispatch(handleData.questsData())
  }
  render(){
    return (

      <Router>
        <div className="App">
        <header className="App-header">
          <Nav />
        </header>


        <Switch>
          <PrivateRoute exact path="/"> <Home/> </PrivateRoute>
          <PrivateRoute exact path="/home"> <Home/> </PrivateRoute>
          <PrivateRoute exact path="/leaderboard"> <Leaderboard/> </PrivateRoute>
          <PrivateRoute exact path='/questions/:id'> <Poll/> </PrivateRoute>
          <Route exact path='/Login'> <Login /> </Route>
          <PrivateRoute exact path='/answered'> <Answered /> </PrivateRoute>
          <PrivateRoute exact path='/unanswered'> <Unanswered/> </PrivateRoute>
          <PrivateRoute exact path='/add'> <NewQ/> </PrivateRoute>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
