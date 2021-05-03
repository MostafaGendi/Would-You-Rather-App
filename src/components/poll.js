import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleToggleAnswer} from '../actions/questions'
import {withRouter} from 'react-router-dom'
import Result  from './result'
import Error from './404'

class Poll extends Component{
  state ={
    answer: '',
  }


  handleSubmit = (e)=>{
    e.preventDefault()
    const answer = this.state.answer
    const {dispatch, authedUser } = this.props
    const qid = this.props.id
    dispatch(handleToggleAnswer({authedUser, qid, answer}))
  }

  render(){
    const {  question, user, authedUser} = this.props
    if (question === null) {
      return(
        <Error />
      )
    }
    return(
        <div className="poll_head">
        {(question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
          ? <Result />
          : (
            <>
            <div className="who"><h6>{user.name} asks:</h6></div>
              <div className="poll">
                  <img src={user.avatarURL} className="avatar" alt="..."/>
                <div className="leader_txt">
                  <h4>Would You Rather ....</h4>
                  <form onChange={(e)=> { this.setState({answer: e.target.value})}}>
                    <label  style={{fontSize: '1.3rem'}}>
                      <input type="radio" name="answer" value="optionOne"/>
                       {question.optionOne.text}
                    </label>
                    <label  style={{fontSize: '1.3rem'}}>
                      <input type="radio" name="answer" value="optionTwo"/>
                       {question.optionTwo.text}
                    </label>
                    <button type="submit" className="submit" onClick={this.handleSubmit}>Submit</button>
                  </form>
                </div>
              </div>
              </>
          )
        }
        </div>
    )
  }
}

  const mapStateToProps = ({authedUser, users, questions }, {match})=>{
    if (!questions[match.params.id]) {
      const question = null
      const user = null
      return{
        question,
          user
      }
    }
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

export default withRouter(connect(mapStateToProps)(Poll))
