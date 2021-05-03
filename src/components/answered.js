import React, { Component } from 'react'
import PollList from './pollsList'
import { connect } from 'react-redux'

class Answered extends Component{
  render(){
    const { questions, authedUser } = this.props
    const questsArr = Object.keys(questions)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    return(
      <div className="leaders_board">
        {questsArr.filter((q)=> (questions[q].optionOne.votes.includes(authedUser) || questions[q].optionTwo.votes.includes(authedUser)))
          .map(question => (
        <PollList key={question} id={question}/>
        ))}
      </div>
    )
  }
}
const mapStateToProps = ({users, questions, authedUser})=>{
  return {
    users,
    questions,
    authedUser
}
}
export default connect(mapStateToProps)(Answered)
