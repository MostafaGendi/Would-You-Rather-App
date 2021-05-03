import React, { Component } from 'react'
import { FcAssistant } from "react-icons/fc";
import { connect } from 'react-redux'
import { authedUsed } from '../actions/autheduser'
import { Redirect, withRouter } from 'react-router-dom'

class Login extends Component{
  state ={
    id:"select"
  }

login = (e) => {
  e.preventDefault()
  if (this.state.id !== "" && this.state.id !== "select") {
    this.props.dispatch(authedUsed(this.state.id))

  }
}
   render(){
    const { users, usersIds, authedUser, location } = this.props

    const { from } = location.state || { from: { pathname: "/" } }

    if (authedUser) {
      return <Redirect to={from} />
    }
    return(
      <div className="login">
        <div className="login_header">
          <h3>Welcome to the Would You Rather App!</h3>
          <h5>Please sign in to continue</h5>
        </div>
        <div>
        <FcAssistant className="login_icon"/>
        <h2>Sign In</h2>
          <form>
            <select onChange={(e)=> this.setState({id: e.target.value})} value={this.state.id} className="disabled">
              <option disabled value="select">Select User...</option>
              {users && usersIds.map(userId => (
                <option key={userId} value={userId}>{users[userId].name}</option>
              ))}
            </select>
            <button type="submit" className="submit" onClick={this.login}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({users, authedUser})=>{
  return{
    users,
    authedUser,
    usersIds: Object.keys(users)
  }
}
export default withRouter(connect(mapStateToProps)(Login))
