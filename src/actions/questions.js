import {_saveQuestionAnswer, _saveQuestion} from '../_DATA.js'
export const RECEIVE_QUESTS = "RECEIVE_QUESTS"
export const TOGGLE_ANSWER = "TOGGLE_ANSWER"
export const ADD_QUESTION = "ADD_QUESTION"


export function receiveQuests(questions){
  return {
    type: RECEIVE_QUESTS,
    questions
  }
}

function toggleAnswer({authedUser, qid, answer}){
  return{
    type: TOGGLE_ANSWER,
    authedUser,
    qid,
    answer
  }
}
function addQuestion(question){
  return{
    type: ADD_QUESTION,
    question
  }
}

export function handleToggleAnswer(info){
  return (dispatch)=>{
    dispatch(toggleAnswer(info))

    return _saveQuestionAnswer(info)
    .catch((e)=>{
      alert('There is an error', e)
      })
  }
}

export function handleAddQuestion({ optionOneText, optionTwoText, author }){
  return (dispatch)=>{
    return _saveQuestion({ optionOneText, optionTwoText, author })
    .then((question) => dispatch(addQuestion(question)))
  }
}
