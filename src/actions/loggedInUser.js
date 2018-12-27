export const SET_LOGGEDIN_USER = 'SET_LOGGEDIN_USER'
export const SET_LOGOUT_USER = 'SET_LOGOUT_USER'

export function setLoggedInUser(id){
	return {
		type: SET_LOGGEDIN_USER,
		id,
	}
}

export function setLogoutUser(){
	return{
		type:SET_LOGOUT_USER
	}
}