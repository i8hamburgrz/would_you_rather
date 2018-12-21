import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from '../logo.svg';
import { handleInitData } from '../actions/shared'
import NewQuestion from './newQuestion'
import HomePage from './homepage'
import Login from './login'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitData())
  }

  render() {
    const { loading, users } = this.props

    return (
      <Router>
        <div className="container">
         {loading === true 
                ? null 
                : <div>
                    <Route path="/" exact component={Login}/>
                    <Route path="/dashboard" component={HomePage}/>
                  </div>
              }
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ users }){
  return{
    users: users,
    loading: Object.keys(users).length === 0
  }
}

export default connect(mapStateToProps)(App)
