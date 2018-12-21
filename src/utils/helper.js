export function formatQuestions(question, user, authedUser){
	const { author, id, optionOne, optionTwo, timestamp } = question
	const { avatarURL , name } = user

	return{
		avatarURL,
		name,
		author,
		id,
		optionOne,
		optionTwo,
		timestamp,
		isAnswered: optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser)
	}
}