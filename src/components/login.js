import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/shared'
import { Link, withRouter } from 'react-router-dom'
import logo from '../logo.svg';

class Login extends Component{
	componentDidMount(){
		const loggedIn = localStorage.getItem('user') ? true : false
		
		if(loggedIn){
			localStorage.removeItem('user')
		}
	}

	login = (event) => {
		const { history, dispatch } = this.props
		
		loginUser(event.target.value, dispatch)
		localStorage.setItem('user', event.target.value)
		history.push(`/dashboard`)
	}

	render(){
		const { users } = this.props
		const usersArr = Object.keys(users).map(user => {
			return {
				...users[user]
			}
			
		})

		return(
			<div className="block block--login">
				<div className="block__title">
						Welcome to the Would You Rather App!
				</div>
				<div className="block__body">
					<div className="logo">
						<div className="logo__wrap">
							<img src={logo} />
						</div>
					</div>

					<h3>Sign In</h3>

					<select onChange={event => this.login(event)}>
						<option>-- Select User --</option>
					{ usersArr.length > 0 && usersArr.map(user => (
						<option key={user.id} value={user.id}>{user.name}</option>
					))}
					</select>
				</div>
			</div>
		)
	}
}

function mapStateToProps({users}){
	return {
		users
	}

}

export default connect(mapStateToProps)(Login)