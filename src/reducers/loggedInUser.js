import { SET_LOGGEDIN_USER } from '../actions/loggedInUser'
import { SET_LOGOUT_USER } from '../actions/loggedInUser'

export default function authedUser(state = null, action){
	switch(action.type){
		case SET_LOGGEDIN_USER:
			return action.id
		case SET_LOGOUT_USER:
			return null
		default:
			return state
	}
}