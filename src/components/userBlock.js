import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserBlock extends Component{
	render(){
		const { user } = this.props
		const score = Object.keys(user.answers).length + user.questions.length

		return(
			<li>
				<div className="block no-hover">
					<div className="block__avatar">
						<div className="block__avatar-wrap">
							<img src={window.location.origin + '/' + user.avatarURL} alt={user.name} />
						</div>
					</div>
					<div className="block__question align-left">
						<h3>{ user.name }</h3>

						<dl>
							<dt>Answered Questions</dt>
							<dd>{Object.keys(user.answers).length}</dd>
							<dt>Created Questions</dt>
							<dd>{user.questions.length}</dd>
						</dl>

						<div className="block__score">
							<h3>score</h3>

							<p>{ score }</p>
						</div>
					</div>
				</div>
			</li>
		)
	}
}

function mapStateToProps({ users }, { id }){
	return {
		user: users[id]
	}	
	
}

export default connect(mapStateToProps)(UserBlock)