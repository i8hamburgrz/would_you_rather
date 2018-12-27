import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/shared'

class NavUser extends Component{
	logout = (e) =>{
		e.preventDefault()
		const { history, dispatch } = this.props
		
		logoutUser(dispatch)
		localStorage.removeItem('user')
		window.location.reload()
	}

	render(){
		const { user } = this.props

		return(
			<div className="nav__info">
			{user && 
				<span> 
					Hello, {user.name}
					<div className="nav__avatar"><img src={user.avatarURL} alt={user.name} /></div>
					<a href="#" onClick={(e) => this.logout(e)}>Logout</a> 
				</span>
			}
			</div>
		)
	}
}

function mapStateToProps({ users, authedUser }){
	return {
		user: users[authedUser]
	}
}

export default connect(mapStateToProps)(NavUser)