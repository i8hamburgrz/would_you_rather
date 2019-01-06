import { RECEIVE_USERS, UPDATE_USERS_ANSWERS, UPDATE_USERS_QUESTIONS } from '../actions/users'

export default function users(state = {}, action){
	switch(action.type){
		case RECEIVE_USERS:
			return {
				...state,
				...action.users
			}
		case UPDATE_USERS_ANSWERS:
			return {
		        ...state,
		        [action.authedUser]: {
		          ...state[action.authedUser],
		          answers: Object.assign({}, state[action.authedUser].answers, { [action.qid]: action.answerId })
		        }
		      }
		case UPDATE_USERS_QUESTIONS:
			return {
				...state,
				[action.author]: {
					...state[action.author],
					questions: state[action.author].questions.concat([action.id])
				}
			}
		default:
			return state
	}
}