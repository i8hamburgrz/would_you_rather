import { RECEIVE_QUESTIONS, SAVE_QUESTION, SAVE_ANSWER } from '../actions/questions'

export default function questions(state = {}, action){
	switch(action.type){
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions
			}

		case SAVE_QUESTION:
			return{
				...state,
				[action.question.id]: action.question
			}

		case SAVE_ANSWER:
			return {
				...state,
				[action.qid]: {
					...state[action.qid],
					optionOne:{
					  ...state[action.qid].optionOne,
					  votes: state[action.qid].optionOne.text === action.answer ? state[action.qid].optionOne.votes.concat([action.authedUser]) : state[action.qid].optionOne.votes,
					},
					optionTwo:{
					  ...state[action.qid].optionTwo,
					  votes:state[action.qid].optionTwo.text === action.answer ? state[action.qid].optionTwo.votes.concat([action.authedUser]) : state[action.qid].optionTwo.votes
					}
				}
			}

		default:
			return state
	}
}