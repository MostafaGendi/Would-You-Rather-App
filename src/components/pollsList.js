import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class PollList extends Component{


  render(){
    const { question, user, id } = this.props

    return(
        <div className="poll_head">
            <div className="who"><h6>{user.name} asks:</h6></div>
        <div className="poll">

            <img src={user.avatarURL} className="avatar" alt="..."/>


          <div className="leader_txt">

            <h4>Would You Rather ....</h4>
            <form>

              <p className="show_less">{question.optionOne.text.length > 10
                ? `-- ${question.optionOne.text.substring(0,10)} --`
                : `-- ${question.optionOne.text} --`
              }</p>
              <Link to={`/questions/${id}`} className="view_poll">View Poll</Link>
            </form>
          </div>
        </div>
        </div>
    )
  }
}

const mapStateToProps = ({users, questions}, {id})=>{
  const question = questions[id]
  const user = users[question.author]
  return {
    users,
    questions,
    question,
    user,
    id
}
}

export default connect(mapStateToProps)(PollList)
