import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'

class QuestionBodyResult extends Component{
	render(){
		const { question, authedUser } = this.props
		const optionOneCount = question.optionOne.votes.length
		const optionTwoCount = question.optionTwo.votes.length
		const optionOnePercent = Math.floor((optionOneCount / question.totalVotes) * 100).toString() + '%'
		const optionTwoPercent = Math.floor((optionTwoCount / question.totalVotes) * 100).toString() + '%'

		return(
			<div>
				<h3>Results: </h3>

				<ul className="results">
					<li className={question.optionOne.votes.includes(authedUser) ? 'is-answered' : ''}>
						<div className="results__burst"><p>Your Vote</p></div>

						<p>Would you rather be a { question.optionOne.text }?</p>

						<div className="meter">
							<div className={'meter__wrap ' + (optionOnePercent === '0%' && 'hide')} style={{"width": optionOnePercent}}>
								{ optionOnePercent }
							</div>
						</div>

						<p>{ optionOneCount } out of { question.totalVotes }</p>
					</li>
					<li className={question.optionTwo.votes.includes(authedUser) ? 'is-answered' : ''}>
						<div className="results__burst"><p>Your Vote</p></div>
						
						<p>Would you rather be a { question.optionTwo.text }?</p>

						<div className="meter">
							<div className={'meter__wrap ' + (optionTwoPercent === '0%' && 'hide')} style={{"width": optionTwoPercent}}>
								{ optionTwoPercent }
							</div>
						</div>

						<p>{ optionTwoCount } out of { question.totalVotes }</p>
					</li>
				</ul>
			</div>
		)
	}
}

function mapStateToProps({authedUser}, props){
	return {
		...props,
		authedUser: authedUser
	}
}

export default connect(mapStateToProps)(QuestionBodyResult)