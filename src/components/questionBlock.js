import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestions } from '../utils/helper'
import { Link, withRouter } from 'react-router-dom'

class QuestionBlock extends Component{
	render(){
		const { question, showAnswered, id } = this.props

		return (
			<li style={{display: showAnswered  === question.isAnswered ? 'block' : 'none' }}>
				<div className="block">
					<div className="block__title">
						{question.name} asks:
					</div>
					<div className="block__avatar">
						<div className="block__avatar-wrap">
							<img src={window.location.origin + '/' + question.avatarURL} alt={question.name} />
						</div>
					</div>
					<div className="block__question">
						<h3>Would you rather?</h3>
						<p>{ question.optionOne.text }</p>
						<p>or</p>
						<p>{ question.optionTwo.text }</p>

						<Link to={`/question/${id}`} id={id}> View Poll </Link>
					</div>
				</div>
			</li>
		)
	}
}

function mapStateToProps({ questions, users, authedUser }, {id}){
	const question = questions[id]

	return {
		id,
		question: formatQuestions(question, users[question.author], authedUser)
	}	
	
}

export default connect(mapStateToProps)(QuestionBlock)

