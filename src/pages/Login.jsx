import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import { actionUserEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.verifyForm();
    });
  };

  verifyForm = () => {
    const { email, password } = this.state;
    const MIN_PASS_LENGTH = 6;
    const validators = [
      password.length >= MIN_PASS_LENGTH,
      email.includes('@'),
      email.includes('.com'),
    ];
    this.setState({
      disabled: !validators.every((validator) => validator),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(actionUserEmail(email));
    history.push('/carteira');
  };

  render() {
    const { email, password, disabled } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          dataTestId="email-input"
          type="email"
          name="email"
          onChange={this.handleChange}
          value={email}
          required
        />
        <Input
          dataTestId="password-input"
          type="text"
          name="password"
          onChange={this.handleChange}
          value={password}
          required
        />
        <button
          type="submit"
          disabled={disabled}
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Login);
