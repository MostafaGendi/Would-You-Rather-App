import { receiveUsers } from './users'
import { receiveQuests } from './questions'
import * as Data from '../_DATA.js'

export function usersData(){
  return (dispatch)=>{
    return Data._getUsers()
    .then((users)=>{
      dispatch(receiveUsers(users))
    }
  )
  }
}

  export function questsData(){
    return (dispatch)=>{
      return Data._getQuestions()
      .then((questions)=>{
        dispatch(receiveQuests(questions))
      }
  )
}
}
