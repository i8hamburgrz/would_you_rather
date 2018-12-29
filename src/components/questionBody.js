import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionBody extends Component{
	state = {
		answer: ""
	}

	onSetAnswer = (e) => {
		this.setState({
	    	answer: e.currentTarget.value
     	})
	}

	onSubmit = () => {

	}

	render(){
		const { answer } = this.state
		const { question } = this.props

		return (
			<div>
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
			 
				<a href="#">Submit Answer</a>
			</div>
		)
	}
}

export default connect()(QuestionBody)