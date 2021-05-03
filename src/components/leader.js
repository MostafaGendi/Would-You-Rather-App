import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leader extends Component{

  render(){
    const { user, answers, user_questions } = this.props
    return(
        <div className="leader">
          <img src={user.avatarURL} className="avatar" alt="..."/>
          <div className="leader_txt">
            <h4>{user.name}</h4>
            <div className="quest"><p>Answered Question</p>
              <span>{answers.length}</span>
            </div>
            <div className="quest"><p>Created Question</p>
              <span>{user_questions.length}</span>
            </div>
          </div>
          <div className="score">
            <h5>Score</h5>
            <h3 className="score_num">{answers.length + user_questions.length}</h3>
          </div>
        </div>
    )
  }
}
const mapStateToProps = ({users, questions}, {id})=>{
  const user = users[id]
  const answers = Object.keys(user.answers)
  const user_questions = user.questions
  return {
    user,
    questions,
    answers,
    user_questions,
}
}

export default connect(mapStateToProps)(Leader)
