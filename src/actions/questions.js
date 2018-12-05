import { saveQuestion, saveQuestionAnswer } = '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

function saveAnswer({ authedUser, qid, answer }){
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

	}
}

function saveQuestion(question){
	return{
		type: SAVE_QUESTION,
		question,
	}
}

export function handleSaveQuestion(question){
	return (dispatch) => {
		dispatch(saveQuestion(question))

		return saveQuestion(question)
			.catch((e) => {
				console.warn('Error in handleSaveQuestion: ', e)
				dispatch(saveQuestion(question))
				alert("Error Saving Question.")
			})
	}
}