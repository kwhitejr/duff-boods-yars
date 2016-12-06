import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false

const WeekSelector = (props) => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <label>Choose Week</label>
      <div>
        <label><Field name="week" component="input" type="radio" value="1"/> Week 1</label>
        <label><Field name="week" component="input" type="radio" value="2"/> Week 2</label>
        <label><Field name="week" component="input" type="radio" value="3"/> Week 3</label>
        <Field name="week" component={renderError}/>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>Previous</button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  ) 
}

export default reduxForm({
  form: 'selector',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  validate
})(WeekSelector)