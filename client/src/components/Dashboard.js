import React from 'react'
import {Link} from 'react-router-dom'

import SurveyList from './surveys/SurveyList'

const Dashboard = () => {
  return (
    <>
      <SurveyList />
      <div class="fixed-action-btn">
        <Link  to="surveys/new" class="btn-floating btn-large red">
          <i class="large material-icons">add</i> 
        </Link>
      </div>
    </>
  )
}

export default Dashboard
