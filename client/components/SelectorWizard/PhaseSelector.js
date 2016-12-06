import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false

const PhaseSelector = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <label>Choose Phase</label>
      <div>
        <label><Field name="phase" component="input" type="radio" value="1"/> Phase 1</label>
        <label><Field name="phase" component="input" type="radio" value="2"/> Phase 2</label>
        <label><Field name="phase" component="input" type="radio" value="3"/> Phase 3</label>
        <label><Field name="phase" component="input" type="radio" value="4"/> Phase 4</label>
        <Field name="phase" component={renderError}/>
      </div>
      <div>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  ) 
}

export default reduxForm({
  form: 'selector',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  validate
})(PhaseSelector)
