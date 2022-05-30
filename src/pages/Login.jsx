import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import { actionUserEmail } from '../store/actions';
import StyledLogin from './StyledLogin';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
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
    const { email, name } = this.state;
    const MIN_PASS_LENGTH = 1;
    const validators = [
      name.length >= MIN_PASS_LENGTH,
      /^\S+@\S+\.\S+$/.test(email),
    ];
    this.setState({
      disabled: !validators.every((validator) => validator),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { history, dispatch } = this.props;
    const { name } = this.state;
    dispatch(actionUserEmail(name));
    history.push('https://ibrahimborba.github.io/trybewallet/carteira');
  };

  render() {
    const { email, name, disabled } = this.state;
    return (
      <StyledLogin onSubmit={this.handleSubmit}>
        <h1>
          trybe
          <b>wallet</b>
        </h1>
        <Input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name}
          label="Nome"
          placeholder="Nome"
          required
        />
        <Input
          type="email"
          name="email"
          onChange={this.handleChange}
          value={email}
          label="Email"
          placeholder="usuario@email.com"
          required
        />
        <button
          type="submit"
          disabled={disabled}
        >
          Entrar
        </button>
      </StyledLogin>
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
