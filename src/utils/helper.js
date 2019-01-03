export function formatQuestions(question, user, authedUser){
	const { author, id, optionOne, optionTwo, timestamp } = question
	const { avatarURL , name } = user

	const isOptionOneAnswered = optionOne.votes.length > 0 ? optionOne.votes.includes(authedUser) : false
	const isOptionTwoAnswered = optionTwo.votes.length > 0 ? optionTwo.votes.includes(authedUser) : false

	return{
		avatarURL,
		name,
		author,
		id,
		optionOne,
		optionTwo,
		timestamp,
		isAnswered: isOptionOneAnswered || isOptionTwoAnswered,
		totalVotes: optionOne.votes.length + optionTwo.votes.length
	}
}