import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserBlock from './userBlock'

class LeaderBoard extends Component{
	render(){
		const { userIds } = this.props
		return (
			<div className="dashboard">
				<div className="dashboard__body">
					<ul>
						{ userIds.map(id => (
							<UserBlock id={id} key={id} />
						))}
				 	</ul>
					
				</div>
			</div>
		)
	}
}

function mapStateToProps({users}){
	return {
		userIds: Object.keys(users)
			.sort((a,b) => {
				const sumA = Object.keys(users[a].answers).length + Object.keys(users[a].questions).length
				const sumB = Object.keys(users[b].answers).length + Object.keys(users[b].questions).length

				return sumB > sumA

			})
	}	
	
}

export default connect(mapStateToProps)(LeaderBoard)