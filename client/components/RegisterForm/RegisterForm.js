import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import { Field, reduxForm } from 'redux-form';  
import { registerUser } from '../../actions/auth_actions';
import validate from './validate'
import renderField from './renderField'

class Register extends Component {  
  handleFormSubmit(formProps) {
    this.props.registerUser(formProps);
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      {this.renderAlert()}
      <div className="row">
        <div className="col-md-6">
          <Field name="firstName" label="First Name" className="form-control" component={renderField} type="text" />
        </div>
        <div className="col-md-6">
          <Field name="lastName" label="Last Name" className="form-control" component={renderField} type="text" />
        </div>
      </div>
        <div className="row">
          <div className="col-md-12">
            <Field name="email" label="Email" className="form-control" component={renderField} type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Field name="password" label="Password" className="form-control" component={renderField} type="password" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    );
  }
}

function mapStateToProps(state) {  
  return {
    errorMessage: state.auth.error,
    message: state.auth.message
  };
}

const form = reduxForm({  
  form: 'register',
  validate
});

export default connect(mapStateToProps, { registerUser })(form(Register)); 