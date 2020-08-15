import React from 'react';

import './sign-in.style.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { signInWithGoogle } from './../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I Already Have An Account</h2>
        <span>Sign In With Your email and Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            name="password"
            type="password"
            label="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
