import React, { Component, PropTypes } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const WorkoutForm = ({ currentExercise, setIndex, handleSubmit, previousPage, page }) => {

  return (
    <div>
    <div>Page: {page}</div>
    <form onSubmit={handleSubmit}>
      <Field 
        name={currentExercise.name} 
        type="number" 
        placeholder={`enter ${currentExercise.track}`} 
        component={renderField} 
        label="exercise" />
      <div>
        {page !== 1 && <button type="button" className="previous" onClick={previousPage}>Previous</button>}
        <button type="submit" className="next">Submit</button>
      </div>
    </form>
    </div>
  ) 
}

WorkoutForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func,
  currentExercise: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sets: PropTypes.array.isRequired, 
    track: PropTypes.string.isRequired,
  }).isRequired,
  setIndex: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired
};

export default reduxForm({
  form: 'workout',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  validate,
})(WorkoutForm);
