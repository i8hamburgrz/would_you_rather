import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestions } from '../utils/helper'

class QuestionBlock extends Component{
	state = {

	}

	render(){
		const { question, showAnswered } = this.props

		return (
			<li style={{display: showAnswered  === question.isAnswered ? 'block' : 'none' }}>
				<div className="block">
					<div className="block__title">
						{question.name} asks:
					</div>
					<div className="block__avatar">
						<div className="block__avatar-wrap">
							<img src={question.avatarURL} />
						</div>
					</div>
					<div className="block__question">
						<h3>Would you rather?</h3>
						<p>{ question.optionOne.text }</p>
						<p>or</p>
						<p>{ question.optionTwo.text }</p>

						<button>View Poll</button>
					</div>
				</div>
			</li>
		)
	}
}

function mapStateToProps({ questions, users, authedUser }, { id }){
	const question = questions[id]

	return {
		question: formatQuestions(question, users[question.author], authedUser)
	}	
	
}

export default connect(mapStateToProps)(QuestionBlock)

