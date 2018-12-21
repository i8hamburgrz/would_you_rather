import { saveQuestion, saveQuestionAnswer } from '../utils/api'

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

export function handleSaveAnswer(qid, answer){
	return (dispatch, getState) => {
		const { authedUser } = getState()

		return saveQuestionAnswer({
			authedUser,
			qid,
			answer
		})
		.then(() => dispatch(_saveAnswer({ authedUser, qid, answer })))

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

		return saveQuestion(question)
			.then((res) => dispatch(_saveQuestion(res)))
	}
}