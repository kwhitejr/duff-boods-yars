import React from 'react'

const renderField = field => (  
  <div>
    <label>{field.label}</label>
    <div>
      <input className="form-control" type={field.type} {...field.input}/>
      {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
  </div>
);

export default renderField;