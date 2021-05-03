import { RECEIVE_QUESTS, TOGGLE_ANSWER, ADD_QUESTION } from '../actions/questions'

export default function questions (state ={}, action){
  switch (action.type) {
    case RECEIVE_QUESTS:
      return{
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      return{
        ...state,
        ...state.questions,
        [action.question.id]: action.question
      }
    case TOGGLE_ANSWER:
      return{
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat(action.authedUser)

          }
      }
    }
    default:
      return state
  }
}
