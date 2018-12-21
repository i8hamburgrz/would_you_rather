import { getInitialData } from '../utils/api'
import { receiveQuestions } from '../actions/questions'
import { receiveUsers } from '../actions/users'
import { setLoggedInUser } from '../actions/loggedInUser'

const AUTHED_ID = 'sarahedo'

export function handleInitData(){
	return (dispatch) => {
		return getInitialData()
			.then(({ users, questions}) => {
				//dispatch(setLoggedInUser(AUTHED_ID))
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
			})
	}
}

export function loginUser(userToLogin, dispatch){
	dispatch(setLoggedInUser(userToLogin))
}