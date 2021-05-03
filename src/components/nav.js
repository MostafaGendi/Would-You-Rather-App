import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../actions/autheduser'

class Nav extends Component{

  logout = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(logOut())
  }
  render(){
    const {users, authedUser} = this.props
    return(
      <div className="nav">
        <ul className="nav">
        <li><Link to="/home" className="nav_link">Home</Link></li>
        <li><Link to="/add" className="nav_link">New Question</Link></li>
        <li><Link to="/leaderboard" className="nav_link">Leader Board</Link></li>
        </ul>
        {authedUser
          ? <div className="Hello">
              <p>{`Hello ${users[authedUser].name}`}</p>
              <button type="submit" onClick={this.logout}>Log Out</button>
            </div>
            : ""
        }
      </div>
    )
  }
}

const mapStateToProps = ({users, authedUser})=>{
  return{
    users,
    authedUser
  }
}
export default connect(mapStateToProps)(Nav)
