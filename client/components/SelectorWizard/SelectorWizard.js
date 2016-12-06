import React, { Component, PropTypes } from 'react'
import PhaseSelector from './PhaseSelector'
import WeekSelector from './WeekSelector'
import DaySelector from './DaySelector'

class SelectorWizard extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { fetchWorkout } = this.props
    // console.log(fetchWorkout);
    // console.log(fetchWorkout());
    const { page } = this.state
    return (<div>
        {page === 1 && <PhaseSelector onSubmit={this.nextPage}/>}
        {page === 2 && <WeekSelector previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <DaySelector previousPage={this.previousPage} onSubmit={fetchWorkout}/>}
      </div>
    );
  }
}

SelectorWizard.propTypes = {
  fetchWorkout: PropTypes.func.isRequired
}

export default SelectorWizard
