const logger = (store) => (next) => (action) => {
	console.group()
		console.log("The action is: ", action)
		const returnValue = next(action)
		console.log("The new state is: ", store.getState())
	console.groupEnd()
}

export default logger