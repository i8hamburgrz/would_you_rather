export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USERS_ANSWERS = 'UPDATE_USERS_ANSWERS'
export const UPDATE_USERS_QUESTIONS = 'UPDATE_USERS_QUESTIONS'

export function receiveUsers(users){
	return {
		type:RECEIVE_USERS,
		users,
	}

}

export function updateUsersAnswers({ authedUser, qid, answerId }){
	return{
		type: UPDATE_USERS_ANSWERS,
		authedUser,
		qid,
		answerId
	}
}

export function updateUsersQuestions({ author, id }){
	return{
		type: UPDATE_USERS_QUESTIONS,
		author, 
		id
	}
}