import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'


class NewQuestion extends Component{
	state = {
		optionOneText: '',
		optionTwoText: ''
	}

	handleQuestionOneChange = (e) =>{
		const text = e.target.value

		this.setState(() => ({
			optionOneText: text
		}))
	}

	handleQuestionTwoChange = (e) =>{
		const text = e.target.value

		this.setState(() => ({
			optionTwoText: text
		}))
	}

	handleSubmit = (e) => {
		e.preventDefault()

		const { optionOneText, optionTwoText } = this.state
		const { dispatch } = this.props

		dispatch(handleSaveQuestion({optionOneText, optionTwoText, author: 'sarahedo' }))

		this.setState(() => ({
			optionOneText:'',
			optionTwoText: ''
		}))
	}

	disabled(){
		let disabled = true

		if(this.state.optionOneText.length > 0  && this.state.optionTwoText.length > 0){
			disabled = false
		}

		return disabled
	}

	render(){
		const { optionOneText, optionTwoText } = this.state

		return (
			<div className="newQuestion">
				<div className="newQuestion__header">
					Create New Question
				</div>

				<div className="newQuestion__body">
					<p>Complete the question:</p>

					<h3>Would you rather...</h3>

					<form onSubmit={this.handleSubmit}>
						<input 
							type="text"
							value={optionOneText}
							placeholder="Enter Question One Text here"
							onChange={this.handleQuestionOneChange}
						/>

						<div className="newQuestion__or">Or</div>

						<input 
							type="text"
							value={optionTwoText}
							placeholder="Enter Question One Text here"
							onChange={this.handleQuestionTwoChange}
						/>

						<button
							type="submit"
							disabled={this.disabled()}
						>Submit</button>
					</form>
				</div>
			</div>
		)
	}
}

export default connect()(NewQuestion)