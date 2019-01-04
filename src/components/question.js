import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestions } from '../utils/helper'
import QuestionBody from '../components/questionBody'
import QuestionBodyResult from '../components/questionBodyResult'

class Question extends Component{
	render(){
		const { question, user, history } = this.props

		if(!question){
			return (
				<div className="question">
					<div className="block">
						<div className="block__title">404 Error</div>
						<div className="block__question full">
							Sorry! The question you are looking for does not exist.
						</div>
					</div>
				</div>
			)
		}

		return (
			<div className="question">
				<div className="block">
					<div className="block__title">
						{question.name} asks:
					</div>
					<div className="block__avatar">
						<div className="block__avatar-wrap">
							<img src={window.location.origin + '/' + question.avatarURL} alt={question.name} />
						</div>
					</div>
					<div className="block__question align-left">
						{!question.isAnswered ? 
						 	<QuestionBody question={question} />
					 		: <QuestionBodyResult question={question} />
					 	}
					 	
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps({questions, users, authedUser}, props){
	const { id } = props.match.params
	const question = questions[id]

	return{
		user: users[authedUser],
		question: question
			? formatQuestions(question, users[question.author], authedUser)
			: null
	}
}

export default connect(mapStateToProps)(Question)