import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'


class QuestionBody extends Component{
	state = {
		answer: ""
	}

	onSetAnswer = (e) => {
		this.setState({
	    	answer: e.currentTarget.value
     	})
	}

	onSubmit = (e) => {
		e.preventDefault()

		const { answer } = this.state
		const { dispatch, question } = this.props

		dispatch(handleSaveAnswer(question.id, answer))
	}

	render(){
		const { answer } = this.state
		const { question } = this.props

		return (
			<div>
				<h3>Would you rather?</h3>
				
			 	<p><input 
			 		type="radio" 
			 		name="answer"
			 		onChange = { this.onSetAnswer }
			 		checked={answer === question.optionOne.text}  
			 		value={question.optionOne.text} /> {question.optionOne.text}</p>
			 	<p><input 
			 		type="radio" 
			 		name="answer"
			 		onChange = { this.onSetAnswer } 
			 		checked={answer === question.optionTwo.text}  
			 		value={question.optionTwo.text} /> {question.optionTwo.text}</p>
			 
				<a href="#" onClick={e => this.onSubmit(e)}>Submit Answer</a>
			</div>
		)
	}
}

export default connect()(QuestionBody)