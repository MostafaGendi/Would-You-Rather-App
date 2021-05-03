import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

class Result extends Component{
  state ={
    userOption: ''
  }
componentDidMount(){
    const { authedUser, question } = this.props

    if (question.optionOne.votes.includes(authedUser)) {
      this.setState({userOption: 'optionOne'})
    }else if (question.optionTwo.votes.includes(authedUser)) {
      this.setState({userOption: 'optionTwo'})
    }
}

  render(){
    const {  question, user } = this.props
    const optionOneValue = question.optionOne.votes.length
    const optionTwoValue = question.optionTwo.votes.length
    const totalValue = question.optionOne.votes.length + question.optionTwo.votes.length

    return(
            <>
              <div className="who"><h6>{user.name} asks:</h6></div>
              <div className="poll">
                  <img src={user.avatarURL} className="avatar" alt="..."/>
                <div className="leader_txt">

                <form >
                  <label  style={{fontSize: '1.3rem'}} className={this.state.userOption === "optionOne" ? this.state.userOption : ""}>
                    Would You Rather {question.optionOne.text}
                  </label>
                  <progress type="radio" name="answer" value={optionOneValue} max={totalValue} style={{fontSize: '1.5rem'}}>
                    <strong>75%</strong>
                  </progress>
                  <p>{optionOneValue} out of {totalValue}</p>

                  <label  style={{fontSize: '1.3rem'}}  className={this.state.userOption === "optionTwo" ? this.state.userOption : ""}>
                    Would You Rather {question.optionTwo.text}
                  </label>
                  <progress type="radio" name="answer" value={optionTwoValue} max={totalValue} style={{fontSize: '1.5rem'}}>
                    <strong>75%</strong>
                  </progress>
                  <p>{optionTwoValue} out of {totalValue}</p>
                </form>
              </div>
            </div>
            </>
    )
  }
}

  const mapStateToProps = ({authedUser, users, questions }, {match})=>{
  const { id } = match.params
  const question = questions[id]
  const user = users[question.author]
  return {
    id,
    users,
    questions,
    question,
    authedUser,
    user

}
}

export default withRouter(connect(mapStateToProps)(Result))
