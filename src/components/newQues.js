import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQ extends Component{
  state ={
    optionOne: '',
    optionTwo: '',

    toHome: false
  }

  handleAddQ = (e)=>{
    e.preventDefault()
    const { dispatch, authedUser} = this.props
    const optionOneText = this.state.optionOne
    const optionTwoText = this.state.optionTwo
    const author = authedUser
    if (optionOneText && optionTwoText) {
      dispatch(handleAddQuestion({ optionOneText, optionTwoText, author }))
      this.setState({
        optionOne: '',
        optionTwo: '',
        toHome: author ? true : false
      })
    }
  }
  render(){
    const { toHome } = this.state
    if (toHome === true) {
      return <Redirect to='/home' />
    }
    return(
      <div className="question">
        <h1>Create New Question</h1>

        <form>
        <p>Complete the Question</p>
        <h3>Would you rather --</h3>
          <input type="text" placeholder="Enter Option One Text Here" onChange={(e) => this.setState({optionOne: e.target.value})}></input>
          <h2>OR</h2>
          <input type="text" placeholder="Enter Option Two Text Here" onChange={(e) => this.setState({optionTwo: e.target.value})}></input>
          <button type="submit" onClick={this.handleAddQ}>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({users, questions, authedUser})=>{
  return{
    users,
    questions,
    authedUser
  }
}
export default connect(mapStateToProps)(NewQ)
