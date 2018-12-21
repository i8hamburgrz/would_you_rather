import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionBlock from '../components/questionBlock'
import { handleInitData } from '../actions/shared'


class Homepage extends Component{
	state = {
		showAnsweredList: false,
	}

	toggleList = (e, showAnswered) => {
		e.preventDefault()
		
		this.setState(() => ({
			showAnsweredList: showAnswered
		}))
	}

	render(){
		const {showAnsweredList} = this.state
		const { questionsId } = this.props

		return(
			<div className="dashboard">
				<div className="dashboard__toggle-btns">
					<a href="#" 
						className={!showAnsweredList ? `is-active` : ''}
						onClick={(e) => this.toggleList(e, false)}>Unanswered Questions</a>
					<a href="#" 
						className={showAnsweredList ? `is-active` : ''}
						onClick={(e) => this.toggleList(e, true)}>Answered Questions</a>
				</div>
				<div className="dashboard__body">
					<ul>
						{ questionsId.map(id => (
							<QuestionBlock id={id} key={id} showAnswered={showAnsweredList} />
						))}
				 	</ul>
					
				</div>
			</div>
		)
	}
}

function mapStateToProps({questions, authedUser}){
	return {
		questionsId: Object.keys(questions)
			.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
	}	
	
}

export default connect(mapStateToProps)(Homepage)