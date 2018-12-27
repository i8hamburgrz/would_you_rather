import { getInitialData } from '../utils/api'
import { receiveQuestions } from '../actions/questions'
import { receiveUsers } from '../actions/users'
import { setLoggedInUser } from '../actions/loggedInUser'
import { setLogoutUser } from '../actions/loggedInUser'

export function handleInitData(){
	return (dispatch) => {
		return getInitialData()
			.then(({ users, questions}) => {
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
			})
	}
}

export function logoutUser(dispatch){
	dispatch(setLogoutUser())
}

export function loginUser(userToLogin, dispatch){
	dispatch(setLoggedInUser(userToLogin))
}