import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading} from 'react-redux-loading'
import { updateUsersAnswers, updateUsersQuestions } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function receiveQuestions(questions){
	return{
		type: RECEIVE_QUESTIONS,
		questions
	}
}

function _saveAnswer({ authedUser, qid, answer }){
	return{
		type: SAVE_ANSWER,
		authedUser,
		qid,
		answer
	}
}

export function handleSaveAnswer(qid, answer, answerId){
	return (dispatch, getState) => {
		const { authedUser } = getState()
		dispatch(showLoading())

		return saveQuestionAnswer({
			authedUser,
			qid,
			answer
		})
		.then(() => 
		{
			dispatch(_saveAnswer({ authedUser, qid, answer }))
			dispatch(updateUsersAnswers({ authedUser, qid, answerId }))
			dispatch(hideLoading())
		})

	}
}

function _saveQuestion(question){
	return{
		type: SAVE_QUESTION,
		question,
	}
}

export function handleSaveQuestion(question){
	return (dispatch) => {
		dispatch(showLoading())

		return saveQuestion(question)
			.then((res) => 
				{	
					const { author, id } = res

					dispatch(_saveQuestion(res))
					dispatch(updateUsersQuestions({ author, id}))
					dispatch(hideLoading())
				})
	}
}