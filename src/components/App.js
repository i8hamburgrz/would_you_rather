import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import logo from '../logo.svg'
import { handleInitData } from '../actions/shared'
import NewQuestion from './newQuestion'
import HomePage from './homepage'
import Login from './login'
import Nav from './nav'
import NavUser from './nav_user'
import Question from './question'
import LeaderBoard from './leaderboard'
import { loginUser } from '../actions/shared'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount(){
    const { dispatch } = this.props
    const user = localStorage.getItem('user')
    const loggedIn = user ? true : false

    dispatch(handleInitData())
    
    if(loggedIn){
      loginUser(user, dispatch)
    }
  }

  loggedOut() {
     return !!localStorage.getItem('user');
  }

  render() {
    const { loading, users } = this.props

    return (
      <Router>
        <Fragment>
        <LoadingBar className="loader" />
        <div className="nav">
          <div className="nav__wrap">
            <Nav />
            <NavUser />
          </div>
        </div>
        <div className="container">
         {loading === true 
                ? null 
                : <div>
                    <Route 
                      path="/"
                      exact 
                      component = {props =>
                         !this.loggedOut() ? <Login {...props}/> : <Redirect to="/dashboard" />}/>
                    <Route 
                      path="/dashboard"                      
                      component = {props =>
                         this.loggedOut() ? <HomePage {...props}/> : <Redirect to="/" />}/>
                    <Route 
                      path="/add"
                      component = {props =>
                         this.loggedOut() ? <NewQuestion {...props}/> : <Redirect to="/" />} />

                    <Route 
                      path="/leaderboard"
                      component = {props =>
                         this.loggedOut() ? <LeaderBoard {...props}/> : <Redirect to="/" />} />

                    <Route 
                      path="/question/:id"
                      exact
                      component = {props =>
                         this.loggedOut() ? <Question {...props}/> : <Redirect to="/" />} />
                  </div>
              }
        </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ users, questions }){
  return{
    users: users,
    loading: Object.keys(questions).length === 0
  }
}

export default connect(mapStateToProps)(App)
