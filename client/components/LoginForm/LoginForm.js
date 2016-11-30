import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from 'actions/auth_actions';
import renderField from './renderField';

const form = reduxForm({  
  form: 'login'
});

class Login extends Component {
  
  handleFormSubmit(formProps) {
    this.props.loginUser(formProps);
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
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        {this.renderAlert()}
          <div>
            <Field name="email" label="Email" className="form-control" component={renderField} type="text" />
          </div>
          <div>
            <Field name="password" label="Password" className="form-control" component={renderField} type="password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {  
  return {
    errorMessage: state.auth.error,
    message: state.auth.message,
  };
}

export default connect(mapStateToProps, { loginUser })(form(Login));
