import { AUTHED_USER, LOG_OUT } from '../actions/autheduser'

export default function authedUser (state = null, action){
  switch (action.type) {
    case AUTHED_USER:
      return action.id
    case LOG_OUT:
      return null
    default:
      return state
  }
}
