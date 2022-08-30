import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSurveys} from '../../actions'

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys()
  }

  renderSurveys() {
    if (this.props.surveys === null) {
      return <div>Loading</div>
    }
  
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">Date Sent: {new Date(survey.dateSent).toLocaleDateString()}</p>
          </div>
            <div className="card-action">
              <a>Yes: {survey.yes}</a>
              <a>No: {survey.no}</a>
            </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Surveys</h3>
        {this.renderSurveys()}

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {surveys: state.surveys}
}

export default connect(mapStateToProps, {fetchSurveys})(SurveyList)
