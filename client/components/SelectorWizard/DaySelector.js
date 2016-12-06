import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false

let DaySelector = (props) => {

  const { handleSubmit, pristine, previousPage, submitting, phase, week, fetchWorkout } = props
  return (
    <form onSubmit={handleSubmit.bind(fetchWorkout)}>
      <h3>Phase {phase}</h3>
      <h4>Week {week}</h4>
      <label>Choose Day</label>
      <div>
        {(() => {
          switch (phase) {
            case '1': return <PhaseOne />;
            case '2': return <PhaseTwo />;
            case '3': return <PhaseThree />;
            case '4': return <PhaseFour />;
            default: return <h1>Phase Error</h1>;
          }
        })()}
        <Field name="day" component={renderError}/>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>Previous</button>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  ) 
}

DaySelector = reduxForm({
  form: 'selector',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  validate
})(DaySelector)

const selector = formValueSelector('selector') // access current form values
export default DaySelector = connect(
  state => {
    const { phase, week } = selector(state, 'phase', 'week')
    return {
      phase,
      week
    }
  }
)(DaySelector);

const PhaseOne = () => {
  return (<div>
    <label><Field name="day" component="input" type="radio" value="1"/> Day 1: Back & Rear Deltoids</label>
    <label><Field name="day" component="input" type="radio" value="2"/> Day 2: Chest & Front Deltoids</label>
    <label><Field name="day" component="input" type="radio" value="3"/> Day 3: Legs & Calves</label>
    <label><Field name="day" component="input" type="radio" value="4"/> Day 4: Arms & Traps</label>
  </div>);
}

const PhaseTwo = () => {
  return (<div>
    <label><Field name="day" component="input" type="radio" value="1"/> Day 1: Legs & Calves</label>
    <label><Field name="day" component="input" type="radio" value="2"/> Day 2: Back, Traps, & Biceps</label>
    <label><Field name="day" component="input" type="radio" value="3"/> Day 3: Chest & Triceps</label>
    <label><Field name="day" component="input" type="radio" value="4"/> Day 4: Deltoids & Forearms</label>
    <label><Field name="day" component="input" type="radio" value="5"/> Day 5: Legs & Calves</label>
  </div>);
}

const PhaseThree = () => {
  return (<div>
    <label><Field name="day" component="input" type="radio" value="1"/> Day 1: Back & Traps</label>
    <label><Field name="day" component="input" type="radio" value="2"/> Day 2: Chest</label>
    <label><Field name="day" component="input" type="radio" value="3"/> Day 3: Legs & Calves</label>
    <label><Field name="day" component="input" type="radio" value="4"/> Day 4: Deltoids</label>
    <label><Field name="day" component="input" type="radio" value="5"/> Day 5: Arms (Biceps, Triceps, Forearms)</label>
  </div>);
}

const PhaseFour = () => {
  return (<div>
    <label><Field name="day" component="input" type="radio" value="1"/> Day 1: Back & Chest</label>
    <label><Field name="day" component="input" type="radio" value="2"/> Day 2: Legs</label>
    <label><Field name="day" component="input" type="radio" value="3"/> Day 3: Shoulders & Traps</label>
    <label><Field name="day" component="input" type="radio" value="4"/> Day 4: Triceps & Biceps</label>
    <label><Field name="day" component="input" type="radio" value="5"/> Day 5: Legs</label>
    <label><Field name="day" component="input" type="radio" value="6"/> Day 6: Chest & Back</label>
  </div>);
}