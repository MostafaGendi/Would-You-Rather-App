import React, { Component } from 'react'
import Leader from './leader'
import { connect } from 'react-redux'

class Leaderboard extends Component{


  render(){
    const { users } = this.props
    const usersArr = Object.keys(users)
          .sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length)-(Object.keys(users[a].answers).length + users[a].questions.length))
    return(

      <div className="leaders_board">
      {usersArr.map(user => (
        <Leader key={user} id={user}/>
      ))}
      </div>
    )
  }
}

const mapStateToProps = ({users, questions})=>{
  return {
    users,
    questions
  }
}
export default connect(mapStateToProps)(Leaderboard)
