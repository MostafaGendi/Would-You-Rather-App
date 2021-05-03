export const AUTHED_USER = "AUTHED_USER"
export const LOG_OUT = "LOG_OUT"

export function authedUsed(id){
  return {
    type: AUTHED_USER,
    id,
  }
}
export function logOut(){
  return {
    type: LOG_OUT
  }
}
